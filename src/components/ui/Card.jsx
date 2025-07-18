import classNames from 'classnames';

export function Card({ className, children }) {
  return (
    <div className={classNames("rounded-xl border bg-white text-black shadow", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={classNames("border-b p-6", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={classNames("text-xl font-semibold", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p className={classNames("text-sm text-gray-500", className)}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={classNames("p-6", className)}>
      {children}
    </div>
  );
}