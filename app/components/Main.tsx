import Card from "./shared/Card"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto">
      <Card
        imageSrc="/images/aa.jpeg"
        imageAlt="profile picture"
        title="Front End | IOS/Android "
        description="Development"
        heading="Hi!"
        content={
          <>
            <p>Welcome to my portfolio page.</p>
            <p>
              My name is <span className="font-semibold">Andreas</span> and I am
              a developer. Feel free to explore my projects and learn more about
              my journey in the About section.
              <br />
            </p>
            <p>
              <span className="italic text-justify">
                I would love to hear from you!
              </span>{" "}
              Whether you&rsquo;re interested in collaborating, exchanging
              ideas, or simply connecting, don&rsquo;t hesitate to reach out.
            </p>
          </>
        }
      />
    </main>
  )
}

export default Main
