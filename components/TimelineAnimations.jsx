import React, { Component } from "react";
import Anime from "animejs";

import AnimationButton from "../components/AnimationButton";

let animation = null;

const clearCurrentAnimation = (currentAnimation) => {
    if (currentAnimation) {
        console.log("Remove current animation...");
        currentAnimation.pause();
    }
};

const TimeLineAnimationStart = (target) => {
    return new Promise((resolve, reject) => {
        clearCurrentAnimation(animation);

        let enterComplete = false;
        animation = Anime.timeline();
        animation.add({
            targets: target.current,
            background: ["#3D3D3D", "#FFC000"],
            easing: "linear",
            complete: () => {
                console.log("Enter animation complete...");
                enterComplete = true;
                resolve(enterComplete);
            },
        });
    });
};

const TimeLineAnimationReturn = (target) => {
    return new Promise((resolve, reject) => {
        clearCurrentAnimation(animation);

        let exitComplete = false;
        animation = Anime.timeline();
        animation.add({
            targets: target.current,
            background: ["#FFC000", "#3D3D3D"],
            easing: "linear",
            complete: () => {
                console.log("Exit animation complete...");
                exitComplete = true;
                resolve(exitComplete);
            },
        });
    });
};

class TimelineAnimations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            inProgress: false,
        };
        this.setOrReset = this.setOrReset.bind(this);
        this.nodeRef = React.createRef();
    }
    setOrReset() {
        if (!this.state.inProgress) {
            this.setState({
                animate: !this.state.animate,
            });
        }
    }

    // Here we'd try to prevent interrupting the timeline till the
    // Current Animation is complete. In the event there is a
    // Change in the component's state, if would check if
    // an animation is currently running and only update
    // if the animation has completed running.
    // The Timeline animatuion returns a
    // Promise...

    componentDidUpdate(prevProps, prevState) {
        // It is important to check if the prev and current states are
        // The same before making the call as it would implement a
        // Change of State. This is important so we don't make a
        // State update when a state update is being made and
        // Throw the component into an infinite loop of state
        // Updates...

        if (prevState.animate !== this.state.animate)
            if (this.state.animate) {
                this.setState({
                    inProgress: true,
                });
                TimeLineAnimationStart(this.nodeRef).then(() => {
                    console.log("Time to enter...");
                    this.setState({
                        inProgress: false,
                    });
                });
            } else {
                this.setState({
                    inProgress: true,
                });
                TimeLineAnimationReturn(this.nodeRef).then(() => {
                    console.log("Time to Exit");
                    this.setState({
                        inProgress: false,
                    });
                });
            }
    }
    render() {
        return (
            <div className="w-full h-100vh flex justify-center items-center flex-col">
                <div ref={this.nodeRef} className="w-full h-12 bg-black"></div>
                <AnimationButton handleClick={this.setOrReset} />
                <style jsx>{``}</style>
            </div>
        );
    }
}

export default TimelineAnimations;
