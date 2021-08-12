import React, {useEffect} from 'react'
import {getDish, fetchFail} from './../actions'
import {connect} from 'react-redux'


const Food = (props) => {
    const { picture, isFetching, error} = props;

    useEffect(() => {
        props.getDish();
    }, [])

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching food for ya!</h2>;
      }

      const handleClick = () => {
          props.getDish();
      }

      return (
        <>
        <div>
            <h2>Your Dish:</h2>
            <img src={picture.image}/>
        </div>
        <button onClick={handleClick}>Get new dish</button>
      <button onClick={()=> {
        props.fetchFail("Pressed the Error button!!!");
      }}> Error Button</button>
        </>
      );
};

const mapStateToProps = state => {
    return {
      picture: state.picture,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps, { getDish, fetchFail })(Food); 