import "./Feature.css";

const Feature = () => {
  return (
    <div>
      <section className="features clearFix">
        <article className="feature">
          <span className="feature-icon">
            <i className="bi bi-x-diamond-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-diamond-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z" />
              </svg>
            </i>
          </span>
          <h4 className="feature-title">پاراما هانسا یوگاناندا</h4>
          <p className="feature-text">به محض اینکه کاری در جهت منافع کسی انجام می‌دهید، نه تنها او به شما فکر می‌کند بلکه خداوند نیز به شما فکر می‌کند</p>
        </article>

        <article className="feature">
          <span className="feature-icon">
            <i className="bi bi-subtract">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-subtract"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
              </svg>
            </i>
          </span>
          <h4 className="feature-title">بهاگاوادگیتا</h4>
          <p className="feature-text">اگر می‌خواهید شجاعان را بیابید، کسانی را جستجو کنید که قادر به بخشودن هستند و اگر می‌خواهید قهرمانان را بیابید، کسانی را بجویید که قادرند در مقابل نفرت عشق بورزند</p>
        </article>

        <article className="feature">
          <span className="feature-icon">
            <i className="bi bi-symmetry-vertical">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-symmetry-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484M10 4.46V13h4.658z" />
              </svg>
            </i>
          </span>
          <h4 className="feature-title">ویکتور هوگو</h4>
          <p className="feature-text">مرا برای دزدیدن تکه نانی به زندان انداختند و پانزده سال در آنجا نان مجانی خوردم! این دیگر چه دنیایی است</p>
        </article>

        <article className="feature">
          <span className="feature-icon">
            <i className="bi bi-database">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-database"
                viewBox="0 0 16 16"
              >
                <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
              </svg>
            </i>
          </span>
          <h4 className="feature-title">جرالد جمپالسکی</h4>
          <p className="feature-text">پاسخ هر پرسش فقط عشق است. پاسخ هر دردی فقط عشق است. عشق همواره یگانه پاسخ است. زیرا عشق یگانه واقعیتی است که وجود دارد</p>
        </article>
      </section>
    </div>
  );
};
export default Feature;
