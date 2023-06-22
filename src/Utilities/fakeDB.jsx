// add data to local storage
const addToDb = (id) => {
    let appliedJobs = {}
    // Get previous data from local storage, if exists.
    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    // add quantity of applied jobs
    let quantity = appliedJobs[id]
    if(quantity) {
        quantity = quantity + 1;
        appliedJobs[id] = quantity;
    } else {
        appliedJobs[id] = 1;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
    // console.log(appliedJobs)
}

const handleStoredCart = () => {
    let appliedJobs = {}
    // Get previous data from local storage, if exists.
    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}
export {addToDb, handleStoredCart};