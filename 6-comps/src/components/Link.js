import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const clickHandler = (e) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  return (
    <a className={classes} onClick={clickHandler} href={to}>
      {children}
    </a>
  );
}

export default Link;
