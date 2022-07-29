export function printData(arr) {
    const main = document.querySelector('#content')
    let contador = 0
    arr.forEach(pokemon => {
        contador += 0.4

        const { id, name, sprite, stats } = pokemon
        const statsArr = []

        stats.forEach(stat => {
            statsArr.push({
                base_stat: stat.base_stat,
                stat_name: stat.stat.name
            })
        })
        
        const card = document.createElement('div');
        card.setAttribute("style", `--delay: ${contador}`);
        card.classList.add(
            "card",
            "bg-slate-100",
            "w-full",
            "h-full",
            "py-6",
            "px-4",
            "rounded",
            "border-2",
            "hover:border-slate-600",
            "hover:bg-white",
            "transition-all"

        )
        const img = document.createElement('img');
        img.classList.add(
            "w-full",
        )
        const nameTag = document.createElement('p');
        nameTag.classList.add(
            "font-bold",
            "text-lg",
            "lg:text-2xl",
            "capitalize"
        )
        const attributesContainer = document.createElement('div');
        statsArr.forEach(stat => {
            const containerStat = document.createElement('div')
            containerStat.classList.add(
                "flex",
                "w-full"
            )
            const p = document.createElement('p')
            p.classList.add("flex-1")
            const span = document.createElement('span')
            span.classList.add("flex-2")
            p.innerText = stat.stat_name
            span.innerText = stat.base_stat
            containerStat.appendChild(p)
            containerStat.appendChild(span)
            attributesContainer.appendChild(containerStat)
        })

        card.setAttribute('id', id);
        img.src = sprite;
        nameTag.innerText = name

        card.appendChild(img);
        card.appendChild(nameTag);
        card.appendChild(attributesContainer)
        main.appendChild(card);
    })
}