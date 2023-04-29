import './Button.css';

export default function Button(){

    var listeMessage = [
        'Je suis un Message d\'erreur','C\'est dommage je ne peux pas accéder à votre requêtes','J\'ai appelé mon responsable il peut rien faire pour vous','Laissez moi regarder .... En effet ca marche pas',
        'Je fais ce que je peux mais ça fonctionne pas', 'En recherche de Solutions', 'Zzzzzzzzzzzzz', 'Patientez un peu' , 'Ah AAAAhh ben ca marche toujours pas' , ' Pardon'
      ];

    function Message(){
        document.getElementById("message").innerHTML = listeMessage[Math.floor(Math.random() * listeMessage.length )];
    }
    return(
        <div className='Button'>
        <button onClick={Message}>
        Cliquez moi
        </button>
        </div>
    )

    }