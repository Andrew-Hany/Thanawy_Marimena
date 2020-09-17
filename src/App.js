import React, { Component } from 'react';
import Login from './components/login';
import Nav from './components/navbar';
import Video from './components/video';
import Progress from './components/circularProgress';
import Section from './components/section';
import Footer from './components/footer';
import Comp from './components/competitions';
import From from './components/questions';
import './App.css';
import './circle.css';
import Im from './'




class App extends Component {
  state = {
    //face 
    auth: false,
    name: '',
    picture: '',
    mails: '',
    //toggle variables
    ongrades: true,
    onAnnoncement: false,

    //section variales 

    section: [
      {
        arrow: 0,
        id: 1, name: 'Bible', subsection:
          [
            { name: '1', id: 1, compid: 1, read: false, competitionname: "maration part 2" },
            { name: ' 2', id: 2, compid: 2, read: false, competitionname: "maration part 2" },
            { name: ' 3', id: 3, compid: 1, read: false, competitionname: "maration part 1" },
            { name: ' 4', id: 4, compid: 2, read: false, competitionname: "maration part 1" },
            { name: ' 5', id: 5, compid: 3, read: false, competitionname: "maration part 1" },
            { name: ' 6', id: 6, compid: 4, read: false, competitionname: "maration part 1" },
            { name: ' 7', id: 7, compid: 3, read: false, competitionname: "maration part 2" },
            { name: ' 8', id: 8, compid: 4, read: false, competitionname: "maration part 2" },

          ]
      },
      {
        arrow: 0,
        id: 2, name: 'Quizzes', subsection:
          [
            {
              name: 'Quiz 1', id: 1, compid: 1, done: false, competitionname: "maration part 1", grade: "",

              questions: [

                {
                  id: 1, type: "choose", name: "ques1",
                  answers: [
                    { id: 1, name: "ex1" },
                    { id: 2, name: "ex2" }
                  ],
                  correctAnswer: "ex2",
                  answer: "",
                  correct: 0,
                },
                {
                  id: 2, type: "text", name: "ques2",
                  correctAnswer: "asd",
                  answer: "",
                  correct: -1,
                },
              ]
            },
            {
              name: 'Quiz 2', id: 2, compid: 1, done: false, competitionname: "maration part 2", grade: "", answers: {},
              questions: [

                {
                  id: 1, type: "choose", name: "ques1",
                  answers: [
                    { id: 1, name: "ex1" },
                    { id: 2, name: "ex2" },

                  ],
                  correctAnswer: "ex1",
                  answer: "",
                  correct: 0,
                },
                {
                  id: 2, type: "choose", name: "ques2",
                  answers: [
                    { id: 1, name: "ex1" },
                    { id: 2, name: "ex2" }
                  ],
                  correctAnswer: "ex1",
                  answer: "",
                  correct: 0,
                },
                {
                  id: 2, type: "choose", name: "ques3",
                  answers: [
                    { id: 1, name: "ex1" },
                    { id: 2, name: "ex2" }
                  ],
                  correctAnswer: "ex2",
                  answer: "",
                  correct: 0,
                },
              ]
            },






          ],
      },

    ],
    //circle progress
    circle: {
      value: 0,
      properities: ' p' + '0 ',
      color: ' red '
    },
    //goal
    goal: 7,
    //description
    description: "description ...",

    // competitions
    oncompetitions: false,
    onquiz: false, quizName: "",
    onhome: true,
    competitions: [
      { id: 1, name: "maration part 1", open: false },
      { id: 2, name: "maration part 2", open: false },

    ],



  };
  handlesubmitform = (quiz) => {
    const sections = [...this.state.section]
    const index = 1;
    let section = { ...sections[index] } //1 section 
    let subsections = [...section.subsection]     //inside this section there are subsections
    const index1 = subsections.indexOf(quiz);
    // let q = { ...subsections[index1] }         //one sebsection
    subsections[index1].done = true;

    sections[index] = { ...section }


    this.setState({
      section: sections,
    })
    console.log(section)

  }
  handlechoose = (name, quiz, quest) => {
    const sections = [...this.state.section]
    const index = 1;
    let section = { ...sections[index] }
    let subsections = [...section.subsection]
    const index1 = subsections.indexOf(quiz);

    let questions = [...subsections[index1].questions]

    const index2 = questions.indexOf(quest);

    questions[index2].answer = name;
    const grade = "asd";
    if (questions[index2].answer === questions[index2].correctAnswer)
      questions[index2].correct = 1;

    else
      questions[index2].correct = 0;

    sections[index] = { ...section }
    this.setState({
      section: sections,
    })
    console.log(questions.correct);


  }
  handleText = (e, quiz, quest) => {
    const sections = [...this.state.section]
    const index = 1;
    let section = { ...sections[index] }
    let subsections = [...section.subsection]
    const index1 = subsections.indexOf(quiz);

    let questions = [...subsections[index1].questions]

    const index2 = questions.indexOf(quest);

    questions[index2].answer = e;

    sections[index] = { ...section }
    this.setState({
      section: sections,
    })
    console.log(e);
  }

  // toggle
  toggleongrades = () => {
    this.setState({
      ongrades: true,
      onAnnoncement: false
    });
  }


  toggleonAnn = () => {
    this.setState({
      ongrades: false,
      onAnnoncement: true
    });
  }
  toggleonComp = () => {
    this.setState({
      oncompetitions: true,
      onhome: false,
      onquiz: false,
    });
  }
  toggleonQuiz = (name) => {
    this.setState({
      oncompetitions: false,
      onquiz: true,
      onhome: false,
      quizName: name,
    });
  }
  toggleonCompSections = (compet) => {
    const competi = [...this.state.competitions]
    const index = competi.indexOf(compet);
    const competition = { ...competi[index] }
    if (competition.open === false)
      competition.open = true
    else competition.open = false

    competi[index] = { ...competition }
    this.setState({
      competitions: competi
    });
    console.log(competition)
  }
  toggleonHome = () => {
    this.setState({
      oncompetitions: false,
      onhome: true,
      onquiz: false,
    });
  }
  responseFacebook = response => {
    console.log(response);
    if (response.status !== 'unknown')
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url,
        mails: response.email
      });

  }
  componentClicked = () => {
    console.log('Facebook btn clicked');
  }



  handleread = (sectio, sub) => {
    let value = this.state.circle.value;
    const sections = [...this.state.section]
    const index = sections.indexOf(sectio);
    let section = { ...sections[index] }
    let subsection = [...section.subsection]
    const index1 = subsection.indexOf(sub);

    console.log(sub)

    // Subsections[index1] = { ...sub }

    if (subsection[index1].read === false) {
      subsection[index1].read = true;
      if (value === 90) {
        value += 10;
        alert("congratulations! yo have just finished the weekly goal. we are looking forward to see more from you ")
      }
      else if (value === 100) {
        value = value;
      }
      else
        value += 15;
      let properities = this.state.circle.properities;
      properities = " p" + value.toString() + ' ';
      let color = this.state.circle.color;
      if (value <= 60)
        color = 'red'
      else if (value > 60 && value < 85)
        color = 'orange'
      else
        color = 'green'
      this.setState({
        circle: {
          value: value,
          properities: properities,
          color: color
        },
        section: sections
      })
    }
  }
  handleArrowleft = (section) => {
    const sections = [...this.state.section]
    const index = sections.indexOf(section);
    const length = (section.subsection.length - 4)
    sections[index] = { ...section }

    if (sections[index].arrow === length || section.subsection.length <= 4)
      ;
    else
      sections[index].arrow++
    this.setState({
      section: sections
    }
    )
    console.log(length)
  }
  handleArrowRight = (section) => {
    const sections = [...this.state.section]
    const index = sections.indexOf(section);
    sections[index] = { ...section }
    if (sections[index].arrow === 0)
      sections[index].arrow = 0;
    else
      sections[index].arrow--
    this.setState({
      section: sections
    }
    )
  }

  render() {
    return (

      <div >
        {this.state.auth && this.state.onhome &&
          <div>
            <Nav
              auth={this.state.auth}
              picture={this.state.picture}
              name={this.state.name}
              picture={this.state.picture}
              mails={this.state.mails}
              toggleonComp={this.toggleonComp}
              toggleonHome={this.toggleonHome}
            />
            <Video />
            <div className="progress11">
              < Progress
                circle={this.state.circle}
                ongrade={this.state.ongrades}
                toggleongrades={this.toggleongrades}
                onAnnoncement={this.state.onAnnoncement}
                toggleonAnn={this.toggleonAnn}
                description={this.state.description}
              />
            </div>
            <div class="container section" >



              {this.state.section.map(section =>
                < Section
                  key={section.id}
                  id={section.id}
                  sectio={section}
                  subsection={section.subsection}
                  name={section.name}
                  handleread={this.handleread}
                  arrow={section.arrow}
                  handleArrowleft={this.handleArrowleft}
                  handleArrowRight={this.handleArrowRight}
                  // competitionName={null}
                  toggleonQuiz={this.toggleonQuiz}

                />
              )
              }

            </div>
            <Footer />
          </div>
        }

        {
          this.state.oncompetitions &&
          <div>
            <Nav
              auth={this.state.auth}
              picture={this.state.picture}
              name={this.state.name}
              picture={this.state.picture}
              mails={this.state.mails}
              toggleonComp={this.toggleonComp}
              toggleonHome={this.toggleonHome}
            />
            <h2 className=" m-5 text-center" > competitions</h2>
            {this.state.competitions.map(competitions =>

              <Comp
                competitions={competitions}
                key={competitions.id}
                name={competitions.name}
                open={competitions.open}
                toggleonCompSections={this.toggleonCompSections}
                section={this.state.section}
                handleread={this.handleread}
                handleArrowleft={this.handleArrowleft}
                handleArrowRight={this.handleArrowRight}
              />)}

            <Footer />
          </div>
        }
        {this.state.onquiz &&
          < div>
            <Nav
              auth={this.state.auth}
              picture={this.state.picture}
              name={this.state.name}
              picture={this.state.picture}
              mails={this.state.mails}
              toggleonComp={this.toggleonComp}
              toggleonHome={this.toggleonHome}
            />
            {this.state.section[1].subsection.filter(quiz => quiz.name === this.state.quizName).map(quiz =>
              <From
                quiz={quiz}
                quizname={quiz.name}
                questions={quiz.questions}
                handlesubmitform={this.handlesubmitform}
                handlechoose={this.handlechoose}
                handleText={this.handleText}
                done={quiz.done}

              />)}
            {/* <Footer /> */}
          </div>}
        {
          !this.state.auth &&
          <Login
            auth={this.state.auth}
            name={this.state.name}
            picture={this.state.picture}
            mails={this.state.mails}
            responseFacebook={this.responseFacebook}
            componentClicked={this.componentClicked}

          />
        }
      </div >

    );
  }
}
export default App;
