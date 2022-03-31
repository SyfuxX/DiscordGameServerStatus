module.exports = {

  /**
   * Check if the member has the role
   * @param member
   * @param role
   * @returns {boolean}
   */
  hasRole: function hasRole(member, role) {
    const filter = member._roles
      .filter((userRoles) => {
        return userRoles === role;
      });

    return filter.length !== 0;
  }

}
