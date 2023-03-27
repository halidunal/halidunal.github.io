import React from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector} from "react-redux";

function About() {
    const page = useSelector(state => state.page)

    const text = page.language === "tr" ? [
        "Merhaba,",
        "Lisans eğitimimi istatistik alanında tamamladım. Bu alanda almış olduğum programlama dili eğitimleri sonrası kendimi yazılım alanında geliştirmeye ve bu sektörde profesyonelleşmeye karar verdim. Ayrıca Web Tasarım ve Kodlama önlisans bölümü mezunuyum. 3 yılı aşkın kariyerime FullStack Developer olarak devam etmekteyim.",
        "Profesyonel kariyerim boyunca:",
        "• .NET Core MVC, JavaScript, TypeScript, HTML5 ve CCS3 teknolojileriyle responsive UI tasarımları geliştirdim.",
        "• jQuery, React, Angular ve KnockOut gibi JavaScript kütüphaneleri kullanarak çeşitli web yazılımlarının geliştirme ve bakım sürecinde görev aldım.",
        "• NativeScript, ReactNative gibi JavaScript kütüphaneleri kullanarak çeşitli mobil uygulamaların geliştirme ve bakım sürecinde görev aldım.",
        "• SQL(#MSSQL, #PostgreSQL, #Firebase) ve versiyonlama teknolojileriyle(#Git, #TFS) çalıştım.",
        "• RESTful servisler yazdım. xUnit ile geliştirdiğim yazılımların birim teslerini yaptım.",
        "• 2 yıldan fazla grafik tasarım tecrübemle geliştirdiğim yazılımlara görsel destek ve çözümler sağladım.",
        "• Çeşitli e-Dönüşüm projelerinin geliştirme sürecinde görev aldım ve GIS hakkında tecrübe oldum.",
        "İşimi hobilerimden biri olarak görüyorum o yüzden siber uzayda bir şey öğrenmekten kendimi alıkoyamıyorum. Ayrıca analitik düşünme, bireysel-grup halinde çalışma, etkili öğrenme ve zaman yönetimi yetkinliklerine sahibim. Sorumluluk bilinci ve iş ciddiyeti konularında hassasiyet sahibiyim.",
        "Saygılarımla."
    ]:[
        "Hi,",
        "I am a full stack software developer with close to three years of experience. I also have an associate degree in Web Design and Coding and a bachelor's degree in Statistics.",
        "During my professional career I have:",
        "• Development and maintenance of responsive UI desings and mobile application (#.Net Core MVC, #JavaScript, #TypeScript, #HTML5, #CSS3).",
        "• Used some JavaScript Technologies (#jQuery, #React, #Angular, #ReactNative, #NativeScript).",
        "• Worked with version control systems (#GIT, #TFS).",
        "• Worked with database technologies (#MSSQL, #PostgreSQL, #Firebase).",
        "• Trainer & Instructor for middle level of understanding for programming.",
        "• Provided visual support and solutions to the software I developed with my graphic design experience of more than 2 years.",
        "I like my job as one of my hobbies so I can not stop myself of learning anything in cyber space. Also I have analytical thinking, individual-group work, effective learning and time management competencies. I am sensitive about responsibility and business seriousness."
    ]
  return (
    <div className='about'>
        <div className='about-content'>
            <h3>{page.language === "tr" ? <>Hakkımda</> : <>About Me</>}</h3>
            {text.map((text, key) => (
                <p key={key}>{text}</p>
            ))}
            {page.language === "tr" ? 
            <p>Sosyal medya hesaplarıma ve bireysel projelerim için Github profilime <Link to="/">Ana Sayfa</Link>'dan ulaşabilirsin.</p>
            : 
            <p>You can reach  my social media accounts and my Github profile for personal works from the <Link to="/">Home Page</Link>.</p>
        }
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      page: state.page
    }
  }
  
  const mapDispatchToProps = {

  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(About)