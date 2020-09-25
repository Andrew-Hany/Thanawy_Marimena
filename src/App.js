import React, { Component } from 'react';
import Login from './components/login';
import Nav from './components/navbar';
import Video from './components/video';
import Progress from './components/circularProgress';
import Section from './components/section';
import Footer from './components/footer';
import Comp from './components/competitions';
import From from './components/questions';
import As7a7 from './components/2s7a7';
import './App.css';
import './circle.css';





class App extends Component {
  state = {
    //face 
    auth: true,
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
            {
              name: "إنجيل متى ,الأصحاح الأول", id: 1, compid: 1, read: false, content: "1 .كتاب ميلاد يسوع المسيح ابن داود ابن إبراهيم \
              2 إبراهيم ولد إسحاق. وإسحاق ولد يعقوب. ويعقوب ولد يهوذا وإخوته  \
              ويهوذا ولد فارص وزارح من ثامار. وفارص ولد حصرون. وحصرون ولد أرام  \
وأرام ولد عميناداب . وعميناداب ولد نحشون. ونحشون ولد سلمون \
وسلمون ولد بوعز من راحاب. وبوعز ولد عوبيد من راعوث. وعوبيد ولد يسى \
ويسى ولد داود الملك . وداود الملك ولد سليمان من التي لأوريا  \
وسليمان ولد رحبعام . ورحبعام ولد أبيا. وأبيا ولد آسا \
\
 وآسا ولد يهوشافاط. ويهوشافاط ولد يورام. ويورام ولد عزيا \
\
 وعزيا ولد يوثام. ويوثام ولد أحاز. وأحاز ولد حزقيا \
\
1 وحزقيا ولد منسى. ومنسى ولد آمون. وآمون ولد يوشيا \
\
 ويوشيا ولد يكنيا وإخوته عند سبي بابل \
\
 وبعد سبي بابل يكنيا ولد شألتئيل. وشألتئيل ولد زربابل \
\
 وزربابل ولد أبيهود . وأبيهود ولد ألياقيم. وألياقيم ولد عازور \
\
 وعازور ولد صادوق. وصادوق ولد أخيم. وأخيم ولد أليود \
\
 وأليود ولد أليعازر . وأليعازر ولد متان. ومتان ولد يعقوب \
\
 ويعقوب ولد يوسف رجل مريم التي ولد منها يسوع الذي يدعى المسيح \
 فجميع الأجيال من إبراهيم إلى داود أربعة عشر جيلا، ومن داود إلى سبي بابل أربعة عشر جيلا، ومن سبي بابل إلى المسيح أربعة عشر جيلا\
\
 أما ولادة يسوع المسيح فكانت هكذا: لما كانت مريم أمه مخطوبة ليوسف، قبل أن يجتمعا، وجدت حبلى من الروح القدس\
\
 فيوسف رجلها إذ كان بارا، ولم يشأ أن يشهرها، أراد تخليتها سرا\
\
 ولكن فيما هو متفكر في هذه الأمور، إذا ملاك الرب قد ظهر له في حلم قائلا: يا يوسف ابن داود، لا تخف أن تأخذ مريم امرأتك. لأن الذي حبل به فيها هو من الروح القدس\
\
 فستلد ابنا وتدعو اسمه يسوع. لأنه يخلص شعبه من خطاياهم\
\
 وهذا كله كان لكي يتم ما قيل من الرب بالنبي القائل\
\
 هوذا العذراء تحبل وتلد ابنا، ويدعون اسمه عمانوئيل الذي تفسيره: الله معنا\
\
 فلما استيقظ يوسف من النوم فعل كما أمره ملاك الرب، وأخذ امرأته\
\
 ولم يعرفها حتى ولدت ابنها البكر. ودعا اسمه يسوع\
              ", competitionname: "maration part 2"
            },
            {
              name: "إنجيل متى ,الأصحاح الثاتي", id: 2, compid: 2, read: false, content: "1 ولما ولد يسوع في بيت لحم اليهودية في ايام هيرودس الملك اذا مجوس من المشرق قد جاءوا الى اورشليم 2 قائلين: «اين هو المولود ملك اليهود؟ فاننا راينا نجمه في المشرق واتينا لنسجد له». 3 فلما سمع هيرودس الملك اضطرب وجميع اورشليم معه. 4 فجمع كل رؤساء الكهنة وكتبة الشعب وسالهم: «اين يولد المسيح؟» 5 فقالوا له: «في بيت لحم اليهودية لانه هكذا مكتوب بالنبي: 6 وانت يا بيت لحم ارض يهوذا لست الصغرى بين رؤساء يهوذا لان منك يخرج مدبر يرعى شعبي اسرائيل». \
\
            7 حينئذ دعا هيرودس المجوس سرا وتحقق منهم زمان النجم الذي ظهر. 8 ثم ارسلهم الى بيت لحم وقال: «اذهبوا وافحصوا بالتدقيق عن الصبي ومتى وجدتموه فاخبروني لكي اتي انا ايضا واسجد له». 9 فلما سمعوا من الملك ذهبوا. واذا النجم الذي راوه في المشرق يتقدمهم حتى جاء ووقف فوق حيث كان الصبي. 10 فلما راوا النجم فرحوا فرحا عظيما جدا 11 واتوا الى البيت وراوا الصبي مع مريم امه فخروا وسجدوا له ثم فتحوا كنوزهم وقدموا له هدايا: ذهبا ولبانا ومرا. 12 ثم اذ اوحي اليهم في حلم ان لا يرجعوا الى هيرودس انصرفوا في طريق اخرى الى كورتهم.\
            \
            13 وبعدما انصرفوا اذا ملاك الرب قد ظهر ليوسف في حلم قائلا: «قم وخذ الصبي وامه واهرب الى مصر وكن هناك حتى اقول لك. لان هيرودس مزمع ان يطلب الصبي ليهلكه». 14 فقام واخذ الصبي وامه ليلا وانصرف الى مصر 15 وكان هناك الى وفاة هيرودس لكي يتم ما قيل من الرب بالنبي: «من مصر دعوت ابني».\
            \
            16 حينئذ لما راى هيرودس ان المجوس سخروا به غضب جدا فارسل وقتل جميع الصبيان الذين في بيت لحم وفي كل تخومها من ابن سنتين فما دون بحسب الزمان الذي تحققه من المجوس. 17 حينئذ تم ما قيل بارميا النبي: 18 «صوت سمع في الرامة نوح وبكاء وعويل كثير. راحيل تبكي على اولادها ولا تريد ان تتعزى لانهم ليسوا بموجودين».\
            \
            19 فلما مات هيرودس اذا ملاك الرب قد ظهر في حلم ليوسف في مصر 20 قائلا: «قم وخذ الصبي وامه واذهب الى ارض اسرائيل لانه قد مات الذين كانوا يطلبون نفس الصبي». 21 فقام واخذ الصبي وامه وجاء الى ارض اسرائيل. 22 ولكن لما سمع ان ارخيلاوس يملك على اليهودية عوضا عن هيرودس ابيه خاف ان يذهب الى هناك. واذ اوحي اليه في حلم انصرف الى نواحي الجليل. 23 واتى وسكن في مدينة يقال لها ناصرة لكي يتم ما قيل بالانبياء: «انه سيدعى ناصريا».", competitionname: "maration part 2"
            },
            // { name: ' 3', id: 3, compid: 1, read: false, competitionname: "maration part 1" },
            // { name: ' 4', id: 4, compid: 2, read: false, competitionname: "maration part 1" },
            // { name: ' 5', id: 5, compid: 3, read: false, competitionname: "maration part 1" },
            // { name: ' 6', id: 6, compid: 4, read: false, competitionname: "maration part 1" },
            // { name: ' 7', id: 7, compid: 3, read: false, competitionname: "maration part 2" },
            // { name: ' 8', id: 8, compid: 4, read: false, competitionname: "maration part 2" },

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
    onhome: true, as7a7Name: "",
    on2s7a7: false,
    competitions: [
      { id: 1, name: "maration part 1", open: false },
      { id: 2, name: "maration part 2", open: false },

    ],



  };
  toggleOn2s7a7 = (name) => {
    this.setState({
      oncompetitions: false,
      onquiz: false,
      onhome: false,
      on2s7a7: true,
      as7a7Name: name,
    });

  }
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
      on2s7a7: false,
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
      on2s7a7: false,
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



  handleread = (sub) => {
    let value = this.state.circle.value;
    const sections = [...this.state.section]
    // const index = sections.indexOf(sectio);
    let section = { ...sections[0] }
    let subsection = [...section.subsection]
    const index1 = subsection.indexOf(sub);

    console.log(sub);

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

                  arrow={section.arrow}
                  handleArrowleft={this.handleArrowleft}
                  handleArrowRight={this.handleArrowRight}
                  // competitionName={null}
                  toggleonQuiz={this.toggleonQuiz}
                  toggleOn2s7a7={this.toggleOn2s7a7}

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
                toggleonHome={this.toggleonHome}

              />)}
            {/* <Footer /> */}
          </div>}
        {this.state.on2s7a7 &&
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
            {this.state.section[0].subsection.filter(as7a7 => as7a7.name === this.state.as7a7Name).
              map(filteredas7a7 =>
                <As7a7
                  as7a7={filteredas7a7}
                  as7a7name={filteredas7a7.name}
                  handleread={this.handleread}
                  read={filteredas7a7.read}
                  content={filteredas7a7.content}
                  toggleonHome={this.toggleonHome}
                />)


            }

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
