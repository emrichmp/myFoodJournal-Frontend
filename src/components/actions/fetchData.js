export function fetchData() {
    return (dispatch) => {
      dispatch({ type: 'IMAGE_REQUEST' });
      fetch('https://foodish-api.herokuapp.com/api/')
        .then(response => response.json())
        .then(food => {
            let foodpic = food.image
            console.log(food)
            console.log(JSON.stringify(food.image))
            dispatch({ type: 'ADD_IMAGE', foodpic })
        }
        );
    };
  }