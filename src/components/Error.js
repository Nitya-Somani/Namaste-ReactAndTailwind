import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <section className="page_404">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="col-10 col-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">{error.status}</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>{error.statusText}</p>
                <p>
                  The page you are looking for not avaible!
                  <div>{error.data}</div>
                </p>

                <a href="/" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
