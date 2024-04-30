interface IProps{
  title: string
}

function MostFollow(props: IProps) {
  return (
    <div className="gap-3 p-5 max-w-[300px] min-w-[300px] flex flex-col rounded-xl shadow-lg shadow-slate-950 relative overflow-hidden">
      <h1>{props.title}</h1>
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-8 h-8"
          src="https://cdn.discordapp.com/attachments/640011741702520891/1233269149141176320/Screenshot_11-1024x661-1.png?ex=662c7ae6&is=662b2966&hm=799e41df30ebd163cf7d99abfa71070e2440e4d8568227706382260c7c188fe9&"
          alt=""
        />
        <p className="text-wrap break-words">
          dssddsddssddsddssddsddssddsddssddsddssddsddssddsddssddsddssddsddssddsddssddsddssddsddssddsd
        </p>
      </div>
    </div>
  );
}

export default MostFollow;
