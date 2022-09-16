// components
import Resume1 from '../components/resume1';
import Resume from '../components/resume';
import Resume2 from '../components/resume2';
import ResponsiveAppBar from '../components/navbar';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState } from "react";
// images
const man = "../images/man.png";

// styles
import D from "../styles/dashboard.module.css";




const Dashboard = () => {

  const [fields, setfields] = useState({ name: "", email: "", address: "", phone: "", education: "", course: "", college: "", cgpa: "", language: "", skills: "", hobbies: "", internship: "", discription: "", project: "", links: "" })
  const [image, setImage] = useState(man)

  function handleOnChange(event: any) {
    const { target } = event
    const { name, value } = target
    return (setfields({ ...fields, [name]: value }))

  }

  function handleOnChangeP(value: any) {

    return (setfields({ ...fields, phone: value }))

  }

  function handleOnChangeI(event: any) {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const { name, email, address, phone, education, course, college, cgpa, language, skills, hobbies, internship, discription, project, links } = fields;

  return (
    <div className={D.screen}>
      <ResponsiveAppBar />
      <div className={D.content}>
        <div className={D.editbox}>
          <div className={D.pd} style={{ color: "black", marginLeft: 20 }}> <h4>Personal Details:</h4>
            <div className={D.details}>
              <div className={D.img} style={{ cursor: "pointer" }} ><label htmlFor="upload1">
                <img src={image} id="" />

              </label>
                <input type="file" id="upload1" onChange={handleOnChangeI} hidden ></input>
              </div>
              <TextField id="outlined-basic" name="name" value={name} onChange={handleOnChange} label="Name" variant="outlined" sx={{ mt: 1, ml: 3, width: 200 }} />
              <TextField id="outlined-basic" name="email" value={email} onChange={handleOnChange} label="Email" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <MuiPhoneNumber name="phone" value={phone} defaultCountry={'in'} onChange={handleOnChangeP} style={{ marginTop: "20px", marginLeft: 20 }} />
              <TextField id="outlined-basic" name="address" value={address} onChange={handleOnChange} label="address" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />

              <TextField id="outlined-basic" name="education" value={education} onChange={handleOnChange} label="Education" variant="outlined" sx={{ mt: 1, ml: 2, width: 200 }} />
            </div>
          </div>

          <div className={D.ed} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Education: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" name="course" value={course} onChange={handleOnChange} label="Course" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />
              <TextField id="outlined-basic" name="college" value={college} onChange={handleOnChange} label="College" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <TextField id="outlined-basic" name="cgpa" value={cgpa} onChange={handleOnChange} label="CGPA" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.l} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Languages: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" name="language" value={language} onChange={handleOnChange} label="Language" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />
              <TextField id="outlined-basic" name="language" value={language} onChange={handleOnChange} label="Language" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "250px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.s} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Skills: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" name="skills" value={skills} onChange={handleOnChange} label="skill" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />
              <TextField id="outlined-basic" name="skills" value={skills} onChange={handleOnChange} label="Skill" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "250px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.h} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Hobbies: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.details}>
              <TextField id="outlined-basic" name="hobbies" value={hobbies} onChange={handleOnChange} label="Hobby" variant="outlined" sx={{ mt: 1, ml: 0, width: 200 }} />

              <TextField id="outlined-basic" name="hobbies" value={hobbies} onChange={handleOnChange} label="Hobby" variant="outlined" sx={{ mt: 1, ml: 5, width: 200 }} />
              <span style={{ cursor: "pointer", color: "red", fontSize: "20px", fontWeight: "bold", marginLeft: "250px" }}>- </span></div>
            <div className={D.details}>
            </div>
          </div>

          <div className={D.int} style={{ color: "black", marginLeft: 20, marginBottom: 20 }}> <div> <h4> Internship: </h4> </div>
            <div className={D.details}>
              <TextareaAutosize id="outlined-basic" name="internship" value={internship} onChange={handleOnChange} placeholder="Internship" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white", color: "black" }} />


            </div>
            <div className={D.details}>
            </div>
          </div>


          <div className={D.dis} style={{ color: "black", marginLeft: 20, marginBottom: 20 }}> <div> <h4> Discription: </h4> </div>
            <div className={D.details}>
              <TextareaAutosize id="outlined-basic" name="discription" value={discription} onChange={handleOnChange} placeholder="Discription" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white", color: "black" }} />

            </div>



          </div>


          <div className={D.proj} style={{ color: "black", marginLeft: 20 }}> <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "Space-between" }}><h4>Projects: </h4> <span style={{ cursor: "pointer", color: "blue", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>+ </span></div>
            <div className={D.detail} style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
              <TextareaAutosize id="outlined-basic" name="project" value={project} placeholder="Discription" onChange={handleOnChange} style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white", color: "black" }} />

              <TextareaAutosize id="outlined-basic" name="project" value={project} placeholder="Discription" onChange={handleOnChange} style={{ marginTop: 30, height: "40px", backgroundColor: "white", color: "black" }} />
            </div>

          </div>

          <div className={D.link} style={{ color: "black", marginLeft: 20, marginBottom: 20 }}> <div> <h4> Links: </h4> </div>
            <div className={D.details}>
              <TextareaAutosize id="outlined-basic" name="links" value={links} onChange={handleOnChange} placeholder="Paste Your Links" style={{ marginTop: 1, marginLeft: 0, height: "40px", backgroundColor: "white", color: "black" }} />

            </div>



          </div>

        </div>
        <div className={D.resume}>
          <Resume fields={{ ...fields }} />
        </div>
      </div>
    </div>
  )
}


export default Dashboard



