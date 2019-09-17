const patten = {
     name: /^[a-zA-Z\s]{2,15}$/,
     email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
     number: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/,
     zipcode: /^[0-9]{4,6}$/,
     city: /^[a-zA-Z\s]{2,10}$/,
     street: /[\w\W]{2,30}/
};
export default patten;
