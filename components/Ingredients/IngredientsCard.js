
export default function IngredientsCard(props) {
    return (
        <div className='ind_gallery__content--img'>
            <img src={props.image} ></img>

            <div class="ind_gallery__content--img-text">
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
            </div>

            <div class="ind_gallery__content--img-card">
              <h1 class="heading">{props.heading}</h1>

              <div class="card__detail">
                  {props.children}
              </div>
            </div>

        </div>
    )
}