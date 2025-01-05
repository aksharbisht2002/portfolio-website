import React from 'react';
import { FaJava, FaReact, FaAndroid, FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaDocker, FaServer, FaTerminal } from 'react-icons/fa';
import './Skills.css';


const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaJava size={50} color="#007396" />
          <p>Java</p>
        </div>
        <div className="skill">
          <FaReact size={50} color="#61DBFB" />
          <p>React.js</p>
        </div>
        <div className="skill">
          <FaAndroid size={50} color="#3DDC84" />
          <p>Android</p>
        </div>
        <div className="skill">
          <FaHtml5 size={50} color="#E44D26" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={50} color="#264de4" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaDatabase size={50} color="#f0db4f" />
          <p>Database</p>
        </div>
        <div className="skill">
          <FaJs size={50} color="#007396" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaDocker size={50} color="#007396" />
          <p>Docker</p>

        </div>
        <div className="skill">
          <FaServer size={50} color="#007396" />
          <p>CI/CD</p>

        </div>
        <div className="skill">
          <FaTerminal size={50} color="#007396" />
          <p>Terminal</p>
        </div>



      </div>
    </section>
  );
};

export default Skills;
