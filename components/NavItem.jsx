const NavItem = React.forwardRef((props, ref) => {
  return (
    <a
      className={
        `text-center justify-center items-center flex w-100% lg:border-2 border border-solid border-black text-black rounded-lg font-body h-10 lg:h-5 hover:bg-pink hvr-shrink ` +
        props.className
      }
      href={props.href}
      onClick={props.onClick}
      ref={ref}
    >
      <span className="uppercase text-4 lg:text-2">{props.children}</span>
    </a>
  );
});

export default NavItem;
