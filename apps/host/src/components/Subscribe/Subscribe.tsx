import styles from './category-list.module.scss';

/* eslint-disable-next-line */
export interface SubscribeProps {}

export function Subscribe(props: SubscribeProps) {
  return (
    <div className="container max-w-none bg-secondary my-5">
      <div className="grid md:justify-center py-5 xl:px-5">
        <div className="md:col-span-6 col-span-12 py-5">
          <div className="text-center mb-2 pb-2">
            <h2 className="section-title px-5 mb-3">
              <span className="!bg-secondary px-2">Stay Updated</span>
            </h2>
            <p>
              Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
              labore at justo ipsum eirmod duo labore labore.
            </p>
          </div>
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-white !p-6"
                placeholder="Email Goes Here"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-4">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
