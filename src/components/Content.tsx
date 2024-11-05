import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Content = () => {
   
  const {theme} = useContext(ThemeContext)

  return (
    <div>
      <div className="md:container" style={{
        backgroundColor: theme === 'light' ? 'lightgray' : 'black',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '5rem',textAlign:'justify'
      }}>
        <h1 className="mt-7 mb-7 text-3xl">Content</h1>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit sed voluptatem maxime, minus doloremque esse dicta quas debitis expedita nostrum at nihil officiis rem commodi sunt veniam ea temporibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum fuga accusantium nesciunt alias nam sapiente veritatis impedit et aut expedita obcaecati aliquam, esse aperiam asperiores. Iste voluptatum consequuntur porro.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus libero ratione aperiam iste autem modi minus ab exercitationem sint placeat, esse, suscipit est nesciunt beatae odit deleniti repellendus vel.
       </p>
        
      </div>
    </div>
  );
};

export default Content;
