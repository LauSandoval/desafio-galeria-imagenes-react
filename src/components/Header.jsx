const Header = (props) => {
    return  (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>

         <h1 className="header"> { props.title } </h1>
         
     </div>
    );
 }; 
 export default Header;