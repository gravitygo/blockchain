// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/// @title SkillCertificateRegistry
/// @author Chyle Andrei Lee
/// @notice A registry of all certificate and it's infromation
contract SkillCertificateRegistry {
    struct Skill {
        string name;
        address issuingAuthority;
        uint256 issueDate;
        bytes32 certificateId;
    }

    mapping(address => Skill[]) public userCertification;
    mapping(bytes32 => address) public certificateToUser;

    /// @notice Event when certificate has been issued
    /// @dev Explain to a developer any extra details
    /// @param recipient The receiver of the certificate
    /// @param name The name of the certificate
    /// @param issuingAuthority The issuer of the certificate
    /// @param issueDate The date the certificate is issued
    event certificateIssued(
        address indexed recipient,
        string name,
        address issuingAuthority,
        uint256 issueDate,
        bytes32 certificateId
    );

    /// @notice Issue a certificate
    /// @param _name Name of the certificate
    /// @param _user The person getting the certificate
    function issueCertification(string memory _name, address _user) public {
        bytes32 certificateHash = keccak256(
            abi.encodePacked(_name, msg.sender, block.timestamp)
        );

        userCertification[_user].push(
            Skill({
                name: _name,
                issuingAuthority: msg.sender,
                issueDate: block.timestamp,
                certificateId: certificateHash
            })
        );

        certificateToUser[certificateHash] = _user;

        emit certificateIssued(
            _user,
            _name,
            msg.sender,
            block.timestamp,
            certificateHash
        );
    }

    function verifyCertificate(
        bytes32 _certificateId,
        address _owner
    ) public view returns (bool) {
        return certificateToUser[_certificateId] == _owner;
    }

    function getCertificates(
        address _user
    ) public view returns (Skill[] memory) {
        return userCertification[_user];
    }
}
