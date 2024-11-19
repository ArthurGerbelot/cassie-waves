import Image from 'next/image';
import { RiSoundcloudFill, RiTwitterXFill } from 'react-icons/ri';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh' }}>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundImage: `url('/cassie-waves.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
        }}
      ></div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '90%',
            height: '90%',
            maxWidth: '100vw',
            maxHeight: '100vh',
          }}
        >
          <Image
            src="/cassie-waves.jpeg"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>


        <div
          style={{
            position: 'absolute',
            bottom: '20%', // Position entre 60 et 80% (ajustez si nécessaire)
            width: '100%',
            textAlign: 'center',
            color: 'white', // Couleur du texte
          }}
        >
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Texte noir pour la bordure */}
            <h1
              style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                color: 'black',
                fontSize: '10vw', fontFamily: "Audiowide",
                margin: 0,
              }}
            >
              Cassie_Waves
            </h1>
            {/* Texte blanc au-dessus */}
            <h1
              style={{
                position: 'relative',
                fontSize: '10vw', fontFamily: "Audiowide",
                margin: 0,
              }}
            >
              Cassie_Waves
            </h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8vw' }}>


            <a
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
              }}
              href="https://soundcloud.com/cassiewaves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                {/* Icône pour la bordure noire */}
                <RiSoundcloudFill
                  size="8vw"
                  color="black"
                  style={{
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    zIndex: 0,
                  }}
                />
                {/* Icône principale */}
                <RiSoundcloudFill
                  size="8vw"
                  color="white"
                  style={{
                    position: 'relative',
                  }}
                />
              </div>
            </a>






            <a
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
              }}
              href="https://x.com/Cassie_Waves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                {/* Icône pour la bordure noire */}
                <RiTwitterXFill
                  size="8vw"
                  color="black"
                  style={{
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    zIndex: 0,
                  }}
                />
                {/* Icône principale */}
                <RiTwitterXFill
                  size="8vw"
                  color="white"
                  style={{
                    position: 'relative',
                  }}
                />
              </div>
            </a>



          </div>

        </div>
      </div>
    </div>
  );
}
