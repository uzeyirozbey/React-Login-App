import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { Card, Button } from 'react-bootstrap';
class KullaniciDetayPage extends Component {
    componentDidMount() {
        const {match} = this.props; 
        if (!this.props.users && match.params.ID_KULLANICI) {
            const ID_KULLANICI = this.props.match.params.ID_KULLANICI;
            this.props.userDetail(ID_KULLANICI);
        }
    }

    constructor(props) {
        super(props);
        this.state = { kullaniciDetay: []};
    }

    //  componentWillReceiveProps(nextProps){
    //     const {kullaniciDetay} = nextProps.kullaniciDetay;
    //     console.log(kullaniciDetay);
    //  }
    render() {
        const { kullaniciDetay} = this.props;
         if(kullaniciDetay!=undefined){
            return (
                <div className="col-md-12">
                    <h6>Kullanıcı Detay </h6>
                    {
                        kullaniciDetay.map((item, key) => {
                            return(
                                <div key = {key}>
                                   <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://media.istockphoto.com/vectors/user-icon-vector-icon-simple-element-illustration-user-symbol-design-vector-id985576798" />
                                    <Card.Body>
                                        <Card.Title> {item.AD} </Card.Title>
                                        <Card.Text>
                                         {item.AD +" "+ item.SOYAD}
                                        </Card.Text>
                                        <Button variant="primary">Kullanıcı Listesi</Button>
                                    </Card.Body>
                                    </Card>
                                </div>
                            ) 
                        }) 
                    }
                </div>
            );
         }
         else{
            return (
                <div className="col-md-12">
                    <h5>Kullanıcı Detayı yükleniyor..</h5>
                </div>
            );
         }
      
    }
}



function mapState(state) {
    const { users } = state
    return users;
}

const actionCreators = {
    userDetail: userActions.userDetail
};

const connectedKullanici = connect(mapState, actionCreators)(KullaniciDetayPage);
export { connectedKullanici as KullaniciDetayPage };

