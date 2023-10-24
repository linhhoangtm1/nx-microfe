import styles from './PageHeader.module.scss';

/* eslint-disable-next-line */
export interface PageHeaderProps {
  title?: string
}

export function PageHeader(props: PageHeaderProps) {
  const { title } = props
  return (
    <div className="container max-w-none bg-secondary mb-12">
    <div className="flex flex-col items-center justify-center" style={{minHeight: 300}}>
        <h1 className="font-semibold uppercase mb-4">{title}</h1>
        <div className="inline-flex">
            <p className="m-0"><a href="">Home</a></p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">{title}</p>
        </div>
    </div>
</div>
  );
}

export default PageHeader;
