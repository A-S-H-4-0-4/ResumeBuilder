// components
import Resume1 from '../components/resume1';
import Resume from '../components/resume';
import Resume2 from '../components/resume2';
import ResponsiveAppBar from '../components/navbar';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MuiPhoneNumber from 'material-ui-phone-number';
// images
const man = "../images/man.png";

// styles
import D from "../styles/dashboard.module.css";




const Dashboard = () => {

  function handleOnChange(value: number) {
    return ({
      phone: value
    });
  }
  return (
    <div className={D.screen}>
      <ResponsiveAppBar />
      <div className={D.content}>
        <div className={D.editbox}>
          <div className={D.pd} style={{ color: "black", marginLeft: 20 }}> <h4>Personal Details:</h4>
            <div className={D.details}>
              <div className={D.img}><img src={man} /></div>
              <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ mt: 1, ml: 3, width: 200 }} />
              <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange} style={{ marginTop: "20px", marginLeft: 20 }} />
              <TextField id="outlined-basic" label="address" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />

              <TextField id="outlined-basic" label="Education" variant="outlined" sx={{ mt: 1, ml: 2, width: 200 }} />
            </div>
          </div>

          <div className={D.ed} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Education: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" label="Course" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />
              <TextField id="outlined-basic" label="College" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <TextField id="outlined-basic" label="CGPA" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.l} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Languages: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" label="Language" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />
              <TextField id="outlined-basic" label="Language" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "250px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.s} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Skills: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" label="skill" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />
              <TextField id="outlined-basic" label="Skill" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "250px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.h} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Hobbies: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" label="Hobby" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />

              <TextField id="outlined-basic" label="Hobby" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "250px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.int} style={{ color: "black", marginLeft: 20, marginBottom: 20 }}> <div> <h4> Internship: </h4> </div>
            <div className={D.details}>
              <TextareaAutosize id="outlined-basic" placeholder="Internship" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white" , color: "black"}} />


            </div>
            <div className={D.details}>
            </div>
          </div>


          <div className={D.dis} style={{ color: "black", marginLeft: 20, marginBottom: 20 }}> <div> <h4> Discription: </h4> </div>
            <div className={D.details}>
              <TextareaAutosize id="outlined-basic" placeholder="Discription" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white",color: "black" }} />

            </div>
            
            

          </div>
          
          
          <div className={D.proj} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Projects: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.detail} style = {{display:"flex",flexDirection:"column",marginBottom:"20px"}}>
            <TextareaAutosize id="outlined-basic" placeholder="Discription" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white",color: "black" }} />
        
            <TextareaAutosize id="outlined-basic" placeholder="Discription" style={{ marginTop: 30, height: "40px", backgroundColor: "white",color: "black" }} />
              </div>
         
          </div>
          
          <div className={D.link} style={{ color: "black", marginLeft: 20, marginBottom: 20 }}> <div> <h4> Links: </h4> </div>
            <div className={D.details}>
              <TextareaAutosize id="outlined-basic" placeholder="Paste Your Links" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white",color: "black" }} />

            </div>
            
            

          </div>
          
        </div>

        <Resume1 />
      </div>
    </div>
  )
}


export default Dashboard



