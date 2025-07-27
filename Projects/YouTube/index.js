let container = document.querySelector(".container");

function AddVideo(video,head, description, channel_name, view, sub)
{
    let newVideo = document.createElement("div");
    newVideo.classList.add("video", "border-2","h-fit", "w-full", "flex", "p-2", "gap-4");
    newVideo.innerHTML = `
        <iframe id="vid" height="100px" width="30%" src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="content w-full">
                <h1 id="heading">${head}</h1>
                <p id="desc">${description}</p>
                <div class="flex justify-between bg-red-200 pr-4">
                    <p id="Channel_Name">${channel_name}</p>
                    <p id="views">${view}</p>
                    <p id="subs">${sub}</p>
                </div>
            </div>
    `;
    container.appendChild(newVideo);
}

AddVideo("https://www.youtube.com/embed/oWGGJAKhRxY", "prabhas","nothing", "Tseries", "256", 325698);
AddVideo("https://www.youtube.com/embed/dQw4w9WgXcQ", "Never Gonna Give You Up","Rick Astley's official music video for ‘Never Gonna Give You Up’", "Rick Astley", "1.5B", 6.56);
AddVideo("https://www.youtube.com/embed/xvFZjo5PgG0", "The Ultimate Spongebob Meme Compilation","A compilation of the best Spongebob memes.", "Meme Central", "50M", 1.2);
