
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { KullaniciDetayPage } from "../KullaniciDetayPage"
class KullaniciPage extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    constructor(props) {
        super(props);
    }

    userDelete(id) {
        return (e) => this.props.userDelete(id)
    }

    render() {
        const { users } = this.props;
        return (
            <div className="col-md-12">
                <h5>Kullanıcı Listesi </h5>
                <hr />
                {users.loading && <em>yükleniyor...</em>}
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    {users.items &&
                        <tbody>

                            {users.items.map((user, index) =>
                                <tr key={index}>
                                    <td> {user.ID_KULLANICI} </td>
                                    <td> {user.AD} </td>
                                    <td> {user.SOYAD} </td>
                                    <td>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="btn btn-darkred"
                                            onClick={this.userDelete(user.ID_KULLANICI)}
                                        > Sil   </Button>
                                         <Link to={`KullaniciDetayPage/${user.ID_KULLANICI}`} className="btn btn-default">Detay</Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    }
                </Table>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    return { alert, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    userDelete: userActions.userDelete
    // userDetail : userActions.userDetail
};

const connectedKullanici = connect(mapState, actionCreators)(KullaniciPage);
export { connectedKullanici as KullaniciPage };