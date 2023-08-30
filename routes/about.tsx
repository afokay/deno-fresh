export default function AboutPage() {
    return (
      <main>
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <img
                class="my-6"
                src="/logo.svg"
                width="128"
                height="128"
                alt="the Fresh logo: a sliced lemon dripping with juice"
                />
                <h1 class="font-semibold text-2xl">About</h1>
                <p class="my-4">This about page</p>
            </div>
        </div>
      </main>
    );
  }