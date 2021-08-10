import React, { useEffect, useState } from 'react';
import './dashCard.css'
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_WORKORDER } from '../../utils/queries';
import { DELETE_WORK_ORDER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
// Delete icon
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

//Acordian

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Dashboard() {

  const { loading, data } = useQuery(QUERY_WORKORDER);

  //var Workorders = data?.WorkOrders || [];
  const [Workorders, setWorkorders] = useState([]);

  const [removeWorkOrder] = useMutation(DELETE_WORK_ORDER);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setWorkorders(data?.WorkOrders);
    }
  }, [data]);

  const deleteHandler = async (event) => {
    event.preventDefault();
    handleClickOpen()
    const { id } = event.target.parentNode;
    try {
      const { data } = await removeWorkOrder({
        variables: {
          _id: id
        }
      });

      setWorkorders(Workorders.filter((work) => work._id !== id));
      console.log(data);
    } catch (err) {
      console.log(err);

    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="cardWrapper">
      {/* <div style={{ fontSize: "30px" }}>USER DASH</div> */}
      <section className="cards"> {/*insert login name here */}
        <div>
          <div className="card  card-title flex" >
            <h2 className='card-title '>Submit a maintenance Request</h2>
            <div className='seperator margin-10'></div>
            <div>Submit all urgent and non-urgent maintenance requests here.</div>
            <Link className='link' to="/maintenance" >Click Here </Link>
          </div>
        </div>

        <div>
          <div className="card card-title flex">
            <h2 className='card-title'>Pay Your Rent</h2>
            <div className='seperator margin-10'></div>
            <div> All monthly rental payments to be made in full by the due date.</div>
            <Link className='link' to="/Payment" >Click Here </Link>
          </div>
        </div>
        <div>
          <div className="card card-title flex">
            <h2 className='card-title '>Book a Property Inspection </h2>
            <div className='seperator margin-10'></div>
            <div>Book quarterly inspection. Choose a date and we do the rest.</div>
            <Link className='link' to="/calendar" >Click Here </Link>
          </div>
        </div>
        <div className='flex'>
          <div className="card card-title flex">
            <h2 className='card-title '>Click Here to
              Request a Call Back</h2>
            <div className='seperator margin-10'></div>
            <div>Request a call back from one of our property specialists. </div>
            <Link className='link' to="/callback" >Click Here </Link>

          </div>
        </div>

      </section>
      <div >
        <h1 className='maintanceHeader'>Maintenance Requests </h1>
        {loading ? (<div>Loading...</div>
        ) : Workorders.map((Workorder) => (
          <div key={Workorder._id} className="">
            <div className='card2 '>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className='{classes.heading}'>
                    <h3>{Workorder.category}</h3>
                    <div>
                      {Workorder.statusOpen === true ? (<div className="rightsideOpen ">Active</div>) : (<div className="rightsideClosed"> Closed</div>)}
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component={'div'}>
                    <div className='margin-10'><span>Description : </span>"{Workorder.problem}"</div>
                    <div >{Workorder.reply}</div>
                    <div className='margin-10' ><span></span></div>
                    <div className='margin-10' ><span>Contractor : </span>{Workorder.handledBy}</div>
                    <div className='margin-10' ><span> Contractor Notes : </span>{Workorder.workerComments}</div>
                    <div >
                      <div style={{ margin: '10px', width: "100%", right: "0" }}>
                        <Link
                          to={{
                            pathname: "/update",
                            state: { id: Workorder._id, problem: Workorder.problem }
                          }}
                          id={Workorder._id}
                          style={{
                            background: "var(--article-color1)",
                            borderRadius: "5px",
                            color: "white",
                            padding: "7px 15px",
                            border: "none",
                            textdecoration: "none"
                          }}
                        >
                          Update
                        </Link>
                        <Button
                          id={Workorder._id}
                          style={{ marginLeft: "auto" }}
                          variant="outlined"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                          onClick={deleteHandler}
                        >
                          Delete
                        </Button>
                      </div>

                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </div>
          </div>

        ))
        }
      </div >
      <div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{" Maintenance request has been deleted!"}</DialogTitle>
          <DialogContent>

          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose} color="primary" autoFocus>
              Thanks
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    </div >
  )
}
// Make a Calender create link that adds it to google cal
// Maintance requests that already exist w status

//  _id
// category
// problem
// reply
// statusOpen
// handledBy
// workerComments