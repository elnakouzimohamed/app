export default function Footer(){

    return(


        <footer className="bg-[lightblue] text-[black] text-center mx-auto my-0 px-0 py-2.5 p-5">
        <p className="p-2.5">Connect with us:</p>
        <div className="flex justify-center flex-row gap-[15px] max-w-[1400px] mx-auto my-0 p-2.5">
        <a href ="https://www.linkedin.com/">
            <img  src="icons8-linkedin-48.png"/>
        </a>
        <a href="https://www.facebook.com/">
            <img src="icons8-facebook-48.png"/>
        </a>
        <a href ="http://instagram.com/">
            <img src="icons8-instagram-48.png"/>
        </a>
        <a href="https://x.com/?mx=2">
            <img  src="icons8-twitter-48.png"/>
        </a>
    </div>
      
        
        <br/>
        <p> All rights reserved - 2023 &copy; </p>
      
        <p className="mb-2">Creo Hub</p>
    </footer>
    );



}