import dcProfileStyle from '../style/doctorProfile.module.css'

function DcAbout() {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>About</div>
            <div className={dcProfileStyle.aboutText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate esse, facilis fuga, fugiat harum incidunt natus optio placeat quam, quibusdam repellendus
                reprehenderit soluta tenetur unde voluptatem. Ab dolorem esse et id illum inventore ipsum libero neque,
                odit quidem quis voluptas.
            </div>
        </div>
    )
}

export default DcAbout;