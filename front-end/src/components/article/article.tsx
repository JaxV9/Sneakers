

export const Article = () => {


    const images: string[] = [
        "https://plus.unsplash.com/premium_photo-1664527308005-af2a2d937893?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1534639077088-d702bcf685e7?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1663151862988-280c2efc38a1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    const title: string[] = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Neque volutpat ac tincidunt vitae. Auctor augue mauris augue neque gravida in.",
        "Dignissim sodales ut eu sem. A iaculis at erat pellentesque adipiscing commodo. Neque laoreet suspendisse interdum consectetur libero.",
    ]

    const text: string[] = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Turpis massa tincidunt dui ut ornare. Et malesuada fames ac turpis egestas sed. Massa vitae tortor condimentum lacinia. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Ut sem viverra aliquet eget sit. Ipsum consequat nisl vel pretium. Blandit aliquam etiam erat velit scelerisque. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
        "Viverra nibh cras pulvinar mattis nunc. Blandit turpis cursus in hac. Et netus et malesuada fames ac turpis egestas maecenas. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Leo vel fringilla est ullamcorper eget nulla facilisi. Nunc consequat interdum varius sit amet mattis.",
        "Id cursus metus aliquam eleifend mi in nulla. Maecenas accumsan lacus vel facilisis volutpat. Dolor sit amet consectetur adipiscing. Aliquet risus feugiat in ante metus dictum at. Auctor urna nunc id cursus metus aliquam. Blandit massa enim nec dui nunc mattis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Feugiat nisl pretium fusce id velit ut. Adipiscing diam donec adipiscing tristique risus nec. In vitae turpis massa sed. Pharetra convallis posuere morbi leo urna. Hendrerit dolor magna eget est. Et netus et malesuada fames ac turpis.",
        "Lacus vestibulum sed arcu non odio euismod. Sed vulputate odio ut enim. Scelerisque eleifend donec pretium vulputate. Mattis enim ut tellus elementum sagittis vitae et. Tempor orci dapibus ultrices in iaculis nunc sed. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Purus in massa tempor nec feugiat nisl pretium. Habitasse platea dictumst vestibulum rhoncus est. Dolor sit amet consectetur adipiscing elit duis tristique. Cras sed felis eget velit aliquet sagittis id consectetur purus."
    ]

    return (
        <>
            <section className="articleSectionContainer">
                {images ?
                    images.map((image, index) => (
                        <div className={`articlePartContainer ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
                            <div className="articleDiv">
                                <span>Étape {index +1}</span>
                                <div className="imageArticle" style={{ backgroundImage: `url(${images[index]})` }}></div>
                            </div>
                            <div className="articleDiv">
                                <div></div>
                                <div className="textArticle">
                                    <span><strong>{title[index]}</strong></span>
                                    <p>{text[index]}</p>
                                </div>
                            </div>
                        </div>

                    ))
                    : null}
            </section>
        </>
    )
}