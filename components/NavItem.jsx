const NavItem = React.forwardRef((props, ref) => {
	return (
		<a
			className={
				`w-100% xl:w-20% border-2 border-solid border-black text-black rounded-lg text-center flex justify-center font-body items-center h-5 ` +
				props.className
			}
			href={props.href}
			onClick={props.onClick}
			ref={ref}
		>
			<span className="uppercase text-2">{props.children}</span>
		</a>
	);
});

export default NavItem;
