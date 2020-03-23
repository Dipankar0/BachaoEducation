import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      <section id='banner'>
        <div className='inner'>
          <header>
            <h2>Bachao – Education এ স্বাগতম!</h2>
          </header>
          <p>
            কি হয় এখানে? এখানে হয় জ্ঞান বিতরণ। সারাদেশ ব্যাপী শিক্ষাকে ছড়িয়ে
            দিতে খুব ছোট্ট একটি প্রয়াস।
          </p>
        </div>
      </section>
      <section className='wrapper style1 container special'>
        <div className='row'>
          <div className='col-4 col-12-narrower'>
            <section>
              <span className='icon solid featured fa-check'></span>
              <header>
                <h3>প্রথম কথা</h3>
              </header>
              <p>
                যোগ দিতে পারবেন শিক্ষক হিসেবে। কাউকে বিনামূল্যে অথবা অর্থের
                বিনিময়ে পড়াতে পারবেন। স্কুল-কলেজ, বিশ্ববিদ্যালয়ের অন্তর্ভুক্ত
                বিষয় পড়াতে, বি, সি, এস এর বিষয়, ব্যাংকের পরীক্ষার বিষয় পড়াতে।
                যেকোনো মিডিয়াম/ভার্সন এর বিষয় পড়ানোর সুযোগ আছে।
              </p>
            </section>
          </div>
          <div className='col-4 col-12-narrower'>
            <section>
              <span className='icon solid featured fa-check'></span>
              <header>
                <h3>দ্বিতীয় কথা</h3>
              </header>
              <p>
                যোগ দিতে পারবেন শিক্ষার্থী হিসেবে। শিক্ষার্থী পছন্দ মত শিক্ষক ও
                বিষয়াবলী বাছাই করতে পারবে। পাবে কোনো টপিক বুঝতে না পারলে তা বুঝে
                নেয়ার সুযোগ বা কোনো সমস্যা (যেমনঃ গাণিতিক সমস্যা) সমাধান না করতে
                পারলে তার সমাধান।
              </p>
            </section>
          </div>
          <div className='col-4 col-12-narrower'>
            <section>
              <span className='icon solid featured fa-check'></span>
              <header>
                <h3>শেষ কথা</h3>
              </header>
              <p>
                পৃথিবীর সব কিছু স্কুল, কলেজ বা বিশ্ববিদ্যালয়ের পরীক্ষা দিয়ে
                যাচাই করা যায় না। তাই, সুযোগ থাকবে মজার মজার বিষয় পড়ানোর/পড়ার,
                যার সাথে পরীক্ষার কোন সম্পর্ক নেই। আপনার কল্পনা-ই শুধু আপনার
                সীমাবদ্ধতা।
              </p>
            </section>
          </div>
        </div>
      </section>
      <div id='footer'>
        <ul className='icons'>
          <a
            href='https://www.facebook.com/bachaoedu/'
            className='icon brands circle fa-facebook-f'
          >
            <span className='label'>Facebook</span>
          </a>
          <li>
            <a href='#' className='icon brands circle fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands circle fa-google-plus-g'>
              <span className='label'>Google+</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands circle fa-github'>
              <span className='label'>Github</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands circle fa-dribbble'>
              <span className='label'>Dribbble</span>
            </a>
          </li>
        </ul>

        <ul className='copyright'>
          <li>&copy; Bachao-Education</li>
          <li>
            Design: <a href='http://html5up.net'>HTML5 UP</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Landing;
