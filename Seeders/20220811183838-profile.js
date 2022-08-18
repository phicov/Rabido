'use strict'
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let profiles = [
      {
        name: falso.randFullName(),
        image:
          'https://cdn.dribbble.com/users/1519999/screenshots/14990758/media/9a6d69c4e03a3dbe22db4e3ba6319f4b.png?compress=1&resize=400x300',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 1,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Best_logo_design_tutorials_on_the_web_jpg_dDA9dBaR-700x410.jpg?auto=format&q=60&fit=max&w=930',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 2,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.creativecomicart.com/wp-content/uploads/2018/07/drawing-comic.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 3,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/graphic-designer-creating-his-own-font-vector-flat-isometric-vector-id1280387224?k=20&m=1280387224&s=612x612&w=0&h=xCU6GlxAmjbRunNP17UBAhd3V6h58UjzHkiQyImvxag=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 4,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/corporate-website-website-ui-kit-official-company-website-business-vector-id1281819478?b=1&k=20&m=1281819478&s=170667a&w=0&h=do5e_rykyD7q2ka2Xnxbrnp2VwPIne-EC2s_p47r-vA=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 5,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://elements-cover-images-0.imgix.net/b91af970-ab5a-4c6d-8adf-3a9d40c8b322?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=fa378ed178efd756e85d90ccd1ebb5c1',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 6,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.designyourway.net/blog/wp-content/uploads/2017/12/illustrator_kit8-net.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 7,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/11/2020_PACKAGING_DESIGN_3_jpg_AttDCyfk.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 8,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://us.123rf.com/450wm/sodis/sodis1712/sodis171200073/91811267-engineer-architect-working-at-drawing-board-flat-design-vector-illustration-.jpg?ver=6',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 9,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://static.wixstatic.com/media/7d96a3_fbf1e4731d5f4ab7a0b257c4bd15b982~mv2.png/v1/fill/w_560,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Proofreading%20Service.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 10,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://us.123rf.com/450wm/rastudio/rastudio2010/rastudio201001040/157062292-data-entry-services-abstract-concept-vector-illustration-.jpg?ver=6',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 11,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/financial-audit-and-literacy-financier-banker-advising-bookkeeping-vector-id1278695301?k=20&m=1278695301&s=612x612&w=0&h=Pd5NP_RMIJJwEeqpFGP_nIMmfNfyK6Sj43eS1MgXvu4=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 12,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.aimblog.io/wp-content/uploads/2020/01/virtual-scribe-4-1024x1024.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 13,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.pngitem.com/pimgs/m/66-662557_virtual-assistant-hd-png-download.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 14,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/music-sound-recording-studio-control-room-with-professional-equipment-vector-id1017796676?k=20&m=1017796676&s=612x612&w=0&h=sScpTIV-viu4PMk4eNKpCgj359F63DeTghjjEv4s5NM=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 15,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/sound-and-video-engineer-working-at-recording-studio-along-with-at-vector-id1067173140?k=20&m=1067173140&s=612x612&w=0&h=EtM9od6_Bgon0MTITv1uKPnPbkJx_HkCn3rcBkd8qOg=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 16,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://thumbs.dreamstime.com/b/voice-over-services-abstract-concept-vector-illustration-recording-studio-audio-video-production-narration-artist-advertising-194519637.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 17,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/teacher-conduct-lessons-online-for-school-pupils-or-university-video-vector-id1248735402?k=20&m=1248735402&s=170667a&w=0&h=XhsJZ22GIwe0wTo99akmrEuxH8NIGe9RruYkQSy1NVI=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 18,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/play-and-mixing-music-vector-id1209911284?k=20&m=1209911284&s=612x612&w=0&h=WK7gj52LLs99ghNwE3OdlJpJ_IySZsx18-4BZ205G-8=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 19,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdg2dU-U8MV6I0ZHiRdzwk-7UqWYSseXMyw&usqp=CAU',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 20,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.kindpng.com/picc/m/175-1754491_clipart-social-media-marketing-png-transparent-png.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 21,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.nicepng.com/png/detail/68-682891_slides-video-editing-clipart.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 22,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },

      {
        name: falso.randFullName(),
        image:
          'https://loudvideos.com/wp-content/uploads/2019/05/explainer-video.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 23,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://static.vecteezy.com/system/resources/previews/005/611/093/original/professional-training-education-video-tutorials-online-business-courses-presentations-webinars-expertise-skill-development-design-for-mobile-and-web-graphics-flat-style-cartoon-illustration-free-vector.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 24,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://cdn.dribbble.com/users/2802836/screenshots/15888587/untitled-2_4x.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 25,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://www.cartoonbrew.com/wp-content/uploads/2018/09/netxgen_gallery-580x326.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 26,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 27,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://wd.imgix.net/image/QMjXarRXcMarxQddwrEdPvHVM242/uyy9OtWHTcxH5sK5VuRA.png?auto=format',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 28,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://cdn.dribbble.com/users/2855594/screenshots/11196535/media/a51930e75f4b118776da6318b304eff5.png?compress=1&resize=400x300&vertical=top',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 29,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://blog.tubikstudio.com/wp-content/uploads/2016/04/ux-design-scannable-interface-tubik-blog.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 30,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8Crn-V88JJLBOP61dt24Z9eW4PdSFII4SAJakhc8-hwl64o1s4IbquPicPxFNTv43C0&usqp=CAU',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 31,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://static.vecteezy.com/system/resources/previews/001/397/516/original/cyber-security-illustration-free-vector.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 32,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://flyclipart.com/thumb2/usabilityhub-user-testing-and-usability-research-platform-400658.png',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 33,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://previews.123rf.com/images/yeletkeshet/yeletkeshet1912/yeletkeshet191200002/135677564-fortune-teller-talking-to-a-woman-about-astrology-spirits-and-occultism-while-using-a-crystal-ball-a.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 34,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/cooperation-and-teamwork-businessman-helps-to-climb-on-staircase-vector-id1146699947?k=20&m=1146699947&s=612x612&w=0&h=lRxslnBlpFlCaKxkKcOo2xl5-bRseBBWzTo9kzL0c4o=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 35,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://thumbs.dreamstime.com/b/personal-stylists-services-professional-imagemaker-fashion-expert-stylist-advice-clothing-consultant-choosing-outfit-188108228.jpg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 36,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/set-of-men-and-women-exercise-at-home-using-the-house-as-a-gym-vector-id1220576876?k=20&m=1220576876&s=612x612&w=0&h=436tV4wL8JHGkYDUANYAQzBQIq6mvclICbA96-Uy2Ws=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 37,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/woman-learning-recipes-online-vector-id1275781364?k=20&m=1275781364&s=612x612&w=0&h=xRdWLx-9SqYrbYT-Eb7nr0xhH0wOpiJqLUO4Vm20VAg=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 38,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/contra-dance-vector-id638434624?k=20&m=638434624&s=612x612&w=0&h=CpvuYjmz57VzYt9Hc5Bcho8Q5RQQ5LiBeeMpT0vRbCU=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 39,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://st3.depositphotos.com/3268541/16875/v/380/depositphotos_168755878-stock-illustration-modern-ghost-with-pencil-icon.jpg?forcejpeg=true',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 40,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/isometric-businessman-proofreading-a-document-on-pc-monitor-vector-id1159141192?k=20&m=1159141192&s=612x612&w=0&h=M-3wTHjHCjzBnQ83VjSF1QU3xY3yuguAsOTVGaCNo2w=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 41,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/people-vector-illustration-flat-cartoon-character-landing-page-vector-id1137470880?k=20&m=1137470880&s=612x612&w=0&h=G12BhLwmpqRaSnBY0S9SiJ1Ia1Ao5PjrLX1Y98KZ1vE=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 42,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/tiny-screenwriter-sitting-on-retro-typewriter-vector-id1289188025?k=20&m=1289188025&s=612x612&w=0&h=T_VYXlEvnvyGIdWrEdwqK1UUa_SszW-U2CZCwtlaV64=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 43,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/communication-flat-icon-vector-id1131290648?k=20&m=1131290648&s=612x612&w=0&h=25T0JBEBjp0pNN3cSjT06focgCIqfzzQZa4IkjVpzNY=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 44,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image: 'https://miro.medium.com/max/1400/1*yB7BdG_SAuZTUx7QFrNhRQ.jpeg',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 45,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://media.istockphoto.com/vectors/online-translator-and-translation-service-concept-male-and-female-vector-id1301107827?b=1&k=20&m=1301107827&s=170667a&w=0&h=rcjVaV6YPYWZ2wnOArW2Ek2piB2F7as7T5orjcOF9Xo=',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 46,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      },
      {
        name: falso.randFullName(),
        image:
          'https://i2.wp.com/www.jobkilla.com/wp-content/uploads/job-manager-uploads/company_logo/2020/12/hr-1.jpg?fit=700%2C400&ssl=1',
        city: falso.randCity(),
        about: falso.randText({ charCount: 200 }),
        contact: falso.randEmail(),
        rate: falso.randAmount({ symbol: '$', min: 25, max: 200, fraction: 0 }),
        projects: falso.randCatchPhrase({ min: 2, max: 8 }),
        skillId: 47,
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate()
      }
    ]

    await queryInterface.bulkInsert('profiles', profiles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('profiles')
  }
}
