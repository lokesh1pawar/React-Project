import react, { component } from 'react';
import {Link} from 'react-router-dom';




class Abt extends react.Component {

    render() {
        return (
            <div>


                {/*     <!-- contact start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="templatemo_contact_top shadow">
                                <div class="templatemo_contact_top_title">CONTACT INFORMATION</div>
                                <div class="templatemo_contact_top_sub"></div>
                                <p>If you have any questions or queries a member of staff will alwayas be happy to help. </p>
                                <p>Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container">
                    <div class="row margin30">
                        <div class="col-md-12">
                            <div class="templatemo_contact shadow">
                                <div class="title">CONTACT US  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MAP</div>
                                <div class="subtitle"></div>
                                <div class="subtitle"></div>
                                <div class="subtitle"></div>
                                <div class="col-md-6">
                                    <form action="#" method="post">
                                        <input type="text" name="textfield" id="nametext" class="name" placeholder="NAME" />
                                        <input type="text" name="textfield" id="emailtext" class="email" placeholder="EMAIL" />
                                        <textarea name="" class="message" placeholder="MESSAGE ... "></textarea>
                                        <button type="submit" class="blue">SEND</button>
                                    </form>
                                </div>
                                <div class="col-md-6">
                                
                                   <a href="https://www.google.co.in/maps/place/TheRapidHire+Private+Limited/@22.7405337,75.9001476,17z/data=!4m5!3m4!1s0x0:0x4e73ebc1261cc50!8m2!3d22.7407268!4d75.9031409" target="_blank">
                                   <img src="images/map-crop.png"></img></a>

                       {/*              <p id="mp"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.9160009656576!2d75.90262444220127!3d22.740726647143717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e73ebc1261cc50!2sTheRapidHire%20Private%20Limited!5e0!3m2!1sen!2sin!4v1612158887903!5m2!1sen!2sin" width="500" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></p> */}

                                </div>
                                <div class="clear"></div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Abt;
