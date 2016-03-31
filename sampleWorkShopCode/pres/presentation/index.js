// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  // Cite,
  // CodePane,
  Deck,
  // Fill,
  Heading,
  Image,
  // Layout,
  Link,
  ListItem,
  List,
  // Markdown,
  // Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/shutterstock_124758646-copy.jpg"),
  me: require("../assets/me.png"),
  notwant: require("../assets/Screenshot 2016-03-30_16.48.38.png"),
  wuut: require("../assets/Screen Shot 2016-03-31 at 6.48.39 AM.png"),
  react: require("../assets/react.png"),
  mdesign: require("../assets/mdesign.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#61dafb",
  secondary: "#232323"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React.JS
            </Heading>
            <Text textSize="1.5em" textColor="white" caps margin="20px 0px 0px" bold>Workshop</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="Bisschen ueber mit erzaehlen">
            <Image src={images.me.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Florian Kasper
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <ListItem>Javascript / React.JS</ListItem>
              <Appear><ListItem>Websockets / WebRTC</ListItem></Appear>
              <Appear><ListItem>Scala / Akka HTTP</ListItem></Appear>
              <Appear><ListItem>Ruby / Rails</ListItem></Appear>
              <Appear><ListItem>GoLang / nethttp</ListItem></Appear>
              <Appear><ListItem>And more...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Experiment spaeter wiederholen um zu sehen ob die Probleme immernoch da sind">
            <Text textSize="1.5em" textColor="white" caps margin="20px 0px 0px" bold>Was sind aus eurerer Erfahrung die</Text>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Probleme
            </Heading>
            <Text textSize="1.5em" textColor="white" caps margin="20px 0px 0px" bold>mit Javascript (-Frameworks) momentan?</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
            <Heading size={2} caps textColor="primary" textFont="primary">
              Ablauf
            </Heading>
              <Appear><ListItem>Entwicklung von Javascript</ListItem></Appear>
              <Appear><ListItem>React</ListItem></Appear>
              <Appear><ListItem>Material Design</ListItem></Appear>
              <Appear><ListItem>REST Interaktion</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="wie hat sich javascript in den letzten Jahren veraendert?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Javascript - Der Dinosaurier
            </Heading>
            <Appear>
              <Text textSize="1.5em" textColor="white" caps margin="20px 0px 0px" bold>Coffeescript, Typescript, EmberScript</Text>
            </Appear>
            <Appear>
              <Text textSize="1.5em" textColor="primary" caps margin="20px 0px 0px" bold>ES6, ES7 (ES2015, ES2016)</Text>
            </Appear>
          </Slide>
          <CodeSlide
            lang="js"
            code={require("raw!../assets/example_es5.raw")}
            margin="20px auto"
            transition={[]}
            ranges={[
              { loc: [0, 1], note: "Einbinden von Libraries" },
              { loc: [2, 5], note: "Funktionsaufruf" },
              { loc: [5, 12], note: "Funktionsaufruf" } ]}
          />
          <CodeSlide
            lang="js"
            code={require("raw!../assets/example_es6.raw")}
            margin="20px auto"
            transition={[]}
            ranges={[
              { loc: [0, 1], note: "Einbinden von Libraries" },
              { loc: [2, 5], note: "Funktionsaufruf" },
              { loc: [5, 12], note: "Funktionsaufruf" } ]}
          />
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
            <Heading size={2} caps textColor="primary" textFont="primary">
              Mehr!
            </Heading>
              <Appear><ListItem>Klassen, Vererbung, getter, setter</ListItem></Appear>
              <Appear><ListItem>Spreads, Microtasks</ListItem></Appear>
              <Appear><ListItem>Static Typing, Konstanten</ListItem></Appear>
              <Appear><ListItem>Lexical this, String Interpolation, ...</ListItem></Appear>
            </List>
          </Slide>
          <CodeSlide
            lang="js"
            code={require("raw!../assets/es6.raw")}
            margin="20px auto"
            transition={[]}
            ranges={[
              { loc: [2, 7], title: "Klassen" },
              { loc: [3, 6], title: "Getter" },
              { loc: [7, 8], title: "Konstanten / Statische Typen" },
              { loc: [9, 13], title: "Objekte verbinden" },
              { loc: [14, 18], title: "Arrays verbinden" },
              { loc: [19, 24], title: "Nicht ueberschreibbar" },
              { loc: [25, 27], note: "mittels `let` kann man Variablen ueberschreiben" },
              { loc: [28, 32], note: "Microtasks" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary" notes="React.JS">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              React.JS - By Facebook
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
              <ListItem>Library / Komponente</ListItem>
              <Appear><ListItem>Erste Version 2013 von Facebook</ListItem></Appear>
              <Appear><ListItem>Entwickelt fuer FB News Feed und Instagram</ListItem></Appear>
              <Appear><ListItem>Verwendet von  Netflix, Imgur, Feedly, Airbnb, Xpandmmi, ...</ListItem></Appear>
              <Appear><ListItem>Version 0.14.X, bald 15.0.0</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="1. warum jquery nach angular? 2. woher weiss man dass der DOM fertig geladen ist?">
            <Image src={images.wuut.replace("/", "")} margin="0px auto 40px" width="60%"/>
            <Image src={images.notwant.replace("/", "")} margin="0px auto 40px" width="100%"/>
            <Heading size={3} caps fit textColor="primary" textFont="primary">
              Wuuuut?
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
              <ListItem>Das V in MVC</ListItem>
              <Appear><ListItem>...oder auch das C oder M</ListItem></Appear>
              <Appear><ListItem>kommt drauf an wie man es benutzt</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
              <Heading size={2} caps textColor="primary" textFont="primary">
                Seperation of Concerns!
              </Heading>
              <ListItem>Verringern von Abhaenigkeiten unter Code Komponenten</ListItem>
              <ListItem> > Wenn eine Klasse geaendert wird. Was muss in anderem Code geaendert werden</ListItem>
              <ListItem>Erhoehung von Gemeinsamkeiten. </ListItem>
              <ListItem> > Macht die Methode, Klasse, ... Sinn mit der Funktionalitaet?</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
              <Heading size={2} caps textColor="primary" textFont="primary">
                React Re-rendert die App jedes mal
              </Heading>
              <ListItem>Konsisitenter Zustand</ListItem>
              <ListItem>Keine Veraenderungen des DOM ueber Zeit</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
            <Heading size={2} caps textColor="primary" textFont="primary">
              React - Heute
            </Heading>
              <ListItem>Basics - Anzeigen, Daten, Events</ListItem>
              <Appear><ListItem>Komponenten, Komponenten, Komponenten</ListItem></Appear>
              <Appear><ListItem>Tools im Build-environment</ListItem></Appear>
              <Appear><ListItem>Vollstaendiges Beispiel</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary">
              Hands On
            </Heading>
            <Heading size={1} caps fit textColor="tertiary">
              Let's Code, Shall we?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              Material Design
            </Heading>
            <Heading size={1} caps fit textColor="tertiary">
              Design Standard. Powered By Google
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="heute verwendet von sagen. Anspielung auf wie React denn nun aussieht.">
            <List>
              <Image src={images.mdesign.replace("/", "")} margin="0px auto 40px" height="100px"/>
              <Appear><ListItem>https://design.google.com</ListItem></Appear>
              <Appear><ListItem>React: Material UI</ListItem></Appear>
              <Appear><ListItem>http://material-ui.com</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary">
              Hands On
            </Heading>
            <Heading size={1} caps fit textColor="tertiary">
              Let's Code, Shall we?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              Redux / Flux
            </Heading>
            <Heading size={1} caps fit textColor="tertiary">
              ...
            </Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Florian Kasper
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.react}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
//
// <Slide transition={["zoom", "fade"]} bgColor="primary">
//   <Heading caps fit>Flexible Layouts</Heading>
//   <Layout>
//     <Fill>
//       <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//         Left
//       </Heading>
//     </Fill>
//     <Fill>
//       <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//         Right
//       </Heading>
//     </Fill>
//   </Layout>
// </Slide>
// <Slide transition={["slide"]} bgColor="black">
//   <BlockQuote>
//     <Quote>Wonderfully formatted quotes</Quote>
//     <Cite>Ken Wheeler</Cite>
//   </BlockQuote>
// </Slide>
// <Slide transition={["slide", "spin"]} bgColor="primary">
//   <Heading caps fit size={1} textColor="tertiary">
//     Smooth
//   </Heading>
//   <Heading caps fit size={1} textColor="secondary">
//     Combinable Transitions
//   </Heading>
// </Slide>
// <Slide transition={["slide"]} bgColor="primary">
//   <Heading size={1} caps fit textColor="tertiary">
//     Your presentations are interactive
//   </Heading>
//   <Interactive/>
// </Slide>
