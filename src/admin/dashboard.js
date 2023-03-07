import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Menu from './menu';
import {useState,useEffect} from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';

export  function Dashboard(){

    let userid = localStorage.getItem('userid');
    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3003/Get_userdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
    },[]);


    return(
        <>
        
        <div className="container-fluid  ">
            <div className="row">
                <Header />
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3"><Menu /></div>
                <div className="col-lg-9">
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr className='text-center text-primary'>
                                    <th>Name</th>
                                    <th>Fathername</th>
                                    <th>Date of Birth</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody className='text-center text-dark'>
                            {
                                userdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.name}</td>
                                        <td>{v.fathername}</td>
                                        <td>{v.date_of_birth}</td>
                                        <td>{v.email}</td>
                                        <td>{v.phone}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <Link to="/portfolio" >
                 
                  <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary m-3">submit </button> 
   
            </Link>
        </div>
    
        </>
    )
}