import Image from "next/image";
import pic from "../public/images/user.png";
import fetch from "isomorphic-unfetch";

const port = process.env.PORT  || 3000;

const Hire = ({ data }) => {
  return (
    <div className="hi-box" >
      {data ? (
        data.map((item) => {
          return (
            <>
                <div className="hi-container">
                  <div className="hi-left">
                    <div className="hi-pic">
                      <Image src={pic} alt="person pic" />
                    </div>
                    <h3>{item.name}</h3>
                    <p >{item.field}</p>
                  </div>
                  <div className="hi-right">
                    <span>Information</span>
                    <hr />
                    <div className="hi-info">
                      <div>
                        <span>Email</span>
                        <h5 >{item.email}</h5>
                      </div>
                      <div>
                        <span>Phone</span>
                        <h5 >{item.phone}</h5>
                      </div>
                      <div>
                        <span>Gender</span>
                        <h5 >{item.gender}</h5>
                      </div>
                      <div>
                        <span>Location</span>
                        <h5 >{item.location}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              
            </>
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:${port}/api/hire`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default Hire;

