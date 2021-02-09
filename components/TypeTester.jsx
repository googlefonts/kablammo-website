import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";
import Link from "next/link";
const isBrowser = typeof window !== "undefined";
import { Formik, Form, Field, useFormikContext } from "formik";
import useVariableFont from "react-variable-fonts";
import Frame from "../components/Frame";
import TypeTesterInput from "../components/TypeTesterInput";

const initialSettings = {
	move: 500,
};

const TypeTester = (props) => {
	const [showChild, setShowChild] = useState(false);
	const [typeMove, setTypeMove] = useState({ value: "500" });
	const AutoSubmitToken = () => {
		// Grab values and submitForm from context
		const { values, submitForm } = useFormikContext();
		useEffect(() => {
			const newTypeMove = { value: values.moveInput.toString() };
			setTypeMove(newTypeMove);
		}, [values]);

		return null;
	};

	return (
		<Frame
			className={`type-tester bg-lime border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh grid grid-rows-6`}
		>
			<div className="flex justify-between row-span-1">
				<div className="pt-10 pl-20">
					<span className="uppercase font-mono text-1">
						Alternates
					</span>
				</div>
				<div className="pt-10 pr-20">
					<span className="uppercase font-mono text-1">
						Background
					</span>
				</div>
			</div>
			<TypeTesterInput key={typeMove.value} typeMove={typeMove} />
			<div className="flex justify-between row-span-1">
				<div className="pt-10 pl-20"></div>
				<div className="pt-10 pr-20">
					<Formik
						initialValues={{ moveInput: typeMove }}
						validate={(values) => {
							const errors = {};

							return errors;
						}}
						onSubmit={(values, actions) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								actions.setSubmitting(false);
							}, 1000);
						}}
					>
						<Form>
							<Field
								name="moveInput"
								type="range"
								min="0"
								max="1000"
							/>
							<AutoSubmitToken />
						</Form>
					</Formik>
				</div>
			</div>
			<style jsx>{`
				.type-tester {
				}
			`}</style>
		</Frame>
	);
};

export default TypeTester;
