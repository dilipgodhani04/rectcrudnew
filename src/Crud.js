import React from 'react'


const Crud =()=>{
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      return (
        <>
          <div className="conatainer">
            <div className="col-md-6">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    name="firstname"
                 
                    placeholder="Enter your Name"
                    className=" form-control"
             
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fathername"
                   
                    placeholder="Enter Father Name"
                    className=" form-control"
                    
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="surname"
                    
                    placeholder="Enter your Surname"
                    className=" form-control"
                   
                  />
                </div>
                </form>
                <button
            type="button"
            className="btn btn-warning"
            // onClick={saveits}
          >
            Save it
          </button>
                </div>
                </div>
              </>
      );
}
export default Crud;