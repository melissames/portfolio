import React, { Component } from 'react';

class PhotoHeader extends Component {
  render() {
    return (
      <div className="photo-container">
        <img src="https://lh3.googleusercontent.com/WxVv3bPNZ37_Ie38skLMG5H4ZTt5G_Jyr6oQsuhE6Ndo5bBe7kSyat_JwdKqxlh2k-zsWT7iod3bM4NMoh3iu-Z6HQWtneIlpyHlUIKqxuPEwwZnnZwSbxWbtvAiu1tupc6hTmoZKKGGDSAo7xG_aXKLmJSnilq4S1qyRVrYHhoKxn4nkfQr67eQ3vKaQtIJgWQTZ2Ks5fXkQBfEiOkOkYcmYfFFbcR9OgKhd8vi8OqAQL0K3rMqTntMcifBHw8zFHHgArXf0e54zc8j79cFiiUysDtNtrYVXNc40H0-rZGwD5JSM_Xe_05cRNckGl8eYmZeqhtRVi2Hrlb_VRFpQjlzQeUhCGXr3W5RkTMB-rtIArJt0-RVMt7meEzt8dFC_WcHZ50_7ovvsjdIgF9b5FSq9KNaSJ1KDU97tvz-DreZF-JOiVyeXqgELaabmk_ln9GXTmmqJgxgNWFl25OLvZGmF5FYWsb3CbEqePfU_V4VuStq3jcZWE1TwFruCbToQSvty5G3NbF3Woh8ZcJeM0kGhSNoNACUQvJCBsuCX8wVRXDZOTfmmgml18BmjdShGMIqYNEnSMh3DV_a_2gbj9XF7PUEbifXLODUcoKMRx8_r1HUJxxuwtndio8wxPr6QUUbM1S0NeHIpk48tkwuw2tK=w1422-h777-no"
        alt=""
        className="photo-header"/>
        <div className="header-positioning">
          <span className="photo-name">Melissa Sames</span>
          <br />
          <span className="photo-subtext">Front End Web Developer</span>
        </div>
      </div>
    );
  }
}

export default PhotoHeader;
