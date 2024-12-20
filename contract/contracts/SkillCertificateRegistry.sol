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
    }

    mapping(address => Skill[]) public userCertification;

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
        uint256 issueDate
    );

    /// @notice Issue a certificate
    /// @param _name Name of the certificate
    /// @param _user The person getting the certificate
    function issueCertification(string memory _name, address _user) public {
        userCertification[_user].push(
            Skill({
                name: _name,
                issuingAuthority: msg.sender,
                issueDate: block.timestamp
            })
        );

        emit certificateIssued(_user, _name, msg.sender, block.timestamp);
    }

    function getCertificates(
        address _user
    ) public view returns (Skill[] memory) {
        return userCertification[_user];
    }
}
