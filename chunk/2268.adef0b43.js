"use strict";(globalThis.webpackChunk_snx_v3_oracle_manager=globalThis.webpackChunk_snx_v3_oracle_manager||[]).push([[2268],{2268:(e,t,n)=>{n.r(t),n.d(t,{abi:()=>r,address:()=>i});const i="0x4Ab09F627fa9706f33178129005300Fd4c00EDF1",r=["error ImplementationIsSterile(address implementation)","error NoChange()","error NotAContract(address contr)","error NotNominated(address addr)","error Unauthorized(address addr)","error UpgradeSimulationFailed()","error ZeroAddress()","event OwnerChanged(address oldOwner, address newOwner)","event OwnerNominated(address newOwner)","event Upgraded(address indexed self, address implementation)","function acceptOwnership()","function getImplementation() view returns (address)","function nominateNewOwner(address newNominatedOwner)","function nominatedOwner() view returns (address)","function owner() view returns (address)","function renounceNomination()","function simulateUpgradeTo(address newImplementation)","function upgradeTo(address newImplementation)","error ValueAlreadyInSet()","error ValueNotInSet()","event FeatureFlagAllowAllSet(bytes32 indexed feature, bool allowAll)","event FeatureFlagAllowlistAdded(bytes32 indexed feature, address account)","event FeatureFlagAllowlistRemoved(bytes32 indexed feature, address account)","event FeatureFlagDeniersReset(bytes32 indexed feature, address[] deniers)","event FeatureFlagDenyAllSet(bytes32 indexed feature, bool denyAll)","function addToFeatureFlagAllowlist(bytes32 feature, address account)","function getDeniers(bytes32 feature) view returns (address[])","function getFeatureFlagAllowAll(bytes32 feature) view returns (bool)","function getFeatureFlagAllowlist(bytes32 feature) view returns (address[])","function getFeatureFlagDenyAll(bytes32 feature) view returns (bool)","function isFeatureAllowed(bytes32 feature, address account) view returns (bool)","function removeFromFeatureFlagAllowlist(bytes32 feature, address account)","function setDeniers(bytes32 feature, address[] deniers)","function setFeatureFlagAllowAll(bytes32 feature, bool allowAll)","function setFeatureFlagDenyAll(bytes32 feature, bool denyAll)","error FeatureUnavailable(bytes32 which)","error InvalidAccountId(uint128 accountId)","error InvalidPermission(bytes32 permission)","error OnlyAccountTokenProxy(address origin)","error PermissionDenied(uint128 accountId, bytes32 permission, address target)","error PermissionNotGranted(uint128 accountId, bytes32 permission, address user)","error PositionOutOfBounds()","event AccountCreated(uint128 indexed accountId, address indexed owner)","event PermissionGranted(uint128 indexed accountId, bytes32 indexed permission, address indexed user, address sender)","event PermissionRevoked(uint128 indexed accountId, bytes32 indexed permission, address indexed user, address sender)","function createAccount() returns (uint128 accountId)","function createAccount(uint128 requestedAccountId)","function getAccountLastInteraction(uint128 accountId) view returns (uint256)","function getAccountOwner(uint128 accountId) view returns (address)","function getAccountPermissions(uint128 accountId) view returns (tuple(address user, bytes32[] permissions)[] accountPerms)","function getAccountTokenAddress() view returns (address)","function grantPermission(uint128 accountId, bytes32 permission, address user)","function hasPermission(uint128 accountId, bytes32 permission, address user) view returns (bool)","function isAuthorized(uint128 accountId, bytes32 permission, address user) view returns (bool)","function notifyAccountTransfer(address to, uint128 accountId)","function renouncePermission(uint128 accountId, bytes32 permission)","function revokePermission(uint128 accountId, bytes32 permission, address user)","error AccountNotFound(uint128 accountId)","error EmptyDistribution()","error InsufficientCollateralRatio(uint256 collateralValue, uint256 debt, uint256 ratio, uint256 minRatio)","error MarketNotFound(uint128 marketId)","error NotFundedByPool(uint256 marketId, uint256 poolId)","error OverflowInt256ToInt128()","error OverflowInt256ToUint256()","error OverflowUint128ToInt128()","error OverflowUint256ToInt256()","error OverflowUint256ToUint128()","event DebtAssociated(uint128 indexed marketId, uint128 indexed poolId, address indexed collateralType, uint128 accountId, uint256 amount, int256 updatedDebt)","function associateDebt(uint128 marketId, uint128 poolId, address collateralType, uint128 accountId, uint256 amount) returns (int256)","error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)","error MissingAssociatedSystem(bytes32 id)","event AssociatedSystemSet(bytes32 indexed kind, bytes32 indexed id, address proxy, address impl)","function getAssociatedSystem(bytes32 id) view returns (address addr, bytes32 kind)","function initOrUpgradeNft(bytes32 id, string name, string symbol, string uri, address impl)","function initOrUpgradeToken(bytes32 id, string name, string symbol, uint8 decimals, address impl)","function registerUnmanagedSystem(bytes32 id, address endpoint)","error InvalidMessage()","error NotCcipRouter(address)","error UnsupportedNetwork(uint64)","function ccipReceive(tuple(bytes32 messageId, uint64 sourceChainSelector, bytes sender, bytes data, tuple(address token, uint256 amount)[] tokenAmounts) message)","error AccountActivityTimeoutPending(uint128 accountId, uint256 currentTime, uint256 requiredTime)","error CollateralDepositDisabled(address collateralType)","error CollateralNotFound()","error FailedTransfer(address from, address to, uint256 value)","error InsufficentAvailableCollateral(uint256 amountAvailableForDelegationD18, uint256 amountD18)","error InsufficientAccountCollateral(uint256 amount)","error InsufficientAllowance(uint256 required, uint256 existing)","error InvalidParameter(string parameter, string reason)","error OverflowUint256ToUint64()","error PrecisionLost(uint256 tokenAmount, uint8 decimals)","event CollateralLockCreated(uint128 indexed accountId, address indexed collateralType, uint256 tokenAmount, uint64 expireTimestamp)","event CollateralLockExpired(uint128 indexed accountId, address indexed collateralType, uint256 tokenAmount, uint64 expireTimestamp)","event Deposited(uint128 indexed accountId, address indexed collateralType, uint256 tokenAmount, address indexed sender)","event Withdrawn(uint128 indexed accountId, address indexed collateralType, uint256 tokenAmount, address indexed sender)","function cleanExpiredLocks(uint128 accountId, address collateralType, uint256 offset, uint256 count) returns (uint256 cleared)","function createLock(uint128 accountId, address collateralType, uint256 amount, uint64 expireTimestamp)","function deposit(uint128 accountId, address collateralType, uint256 tokenAmount)","function getAccountAvailableCollateral(uint128 accountId, address collateralType) view returns (uint256)","function getAccountCollateral(uint128 accountId, address collateralType) view returns (uint256 totalDeposited, uint256 totalAssigned, uint256 totalLocked)","function getLocks(uint128 accountId, address collateralType, uint256 offset, uint256 count) view returns (tuple(uint128 amountD18, uint64 lockExpirationTime)[] locks)","function withdraw(uint128 accountId, address collateralType, uint256 tokenAmount)","event CollateralConfigured(address indexed collateralType, tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18) config)","function configureCollateral(tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18) config)","function getCollateralConfiguration(address collateralType) pure returns (tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18))","function getCollateralConfigurations(bool hideDisabled) view returns (tuple(bool depositingEnabled, uint256 issuanceRatioD18, uint256 liquidationRatioD18, uint256 liquidationRewardD18, bytes32 oracleNodeId, address tokenAddress, uint256 minDelegationD18)[])","function getCollateralPrice(address collateralType) view returns (uint256)","error InsufficientCcipFee(uint256 requiredAmount, uint256 availableAmount)","event TransferCrossChainInitiated(uint64 indexed destChainId, uint256 indexed amount, address sender)","function transferCrossChain(uint64 destChainId, uint256 amount) payable returns (uint256 gasTokenUsed)","error InsufficientDebt(int256 currentDebt)","error PoolNotFound(uint128 poolId)","event IssuanceFeePaid(uint128 indexed accountId, uint128 indexed poolId, address collateralType, uint256 feeAmount)","event UsdBurned(uint128 indexed accountId, uint128 indexed poolId, address collateralType, uint256 amount, address indexed sender)","event UsdMinted(uint128 indexed accountId, uint128 indexed poolId, address collateralType, uint256 amount, address indexed sender)","function burnUsd(uint128 accountId, uint128 poolId, address collateralType, uint256 amount)","function mintUsd(uint128 accountId, uint128 poolId, address collateralType, uint256 amount)","error CannotScaleEmptyMapping()","error IneligibleForLiquidation(uint256 collateralValue, int256 debt, uint256 currentCRatio, uint256 cratio)","error InsufficientMappedAmount()","error MustBeVaultLiquidated()","error OverflowInt128ToUint128()","event Liquidation(uint128 indexed accountId, uint128 indexed poolId, address indexed collateralType, tuple(uint256 debtLiquidated, uint256 collateralLiquidated, uint256 amountRewarded) liquidationData, uint128 liquidateAsAccountId, address sender)","event VaultLiquidation(uint128 indexed poolId, address indexed collateralType, tuple(uint256 debtLiquidated, uint256 collateralLiquidated, uint256 amountRewarded) liquidationData, uint128 liquidateAsAccountId, address sender)","function isPositionLiquidatable(uint128 accountId, uint128 poolId, address collateralType) returns (bool)","function isVaultLiquidatable(uint128 poolId, address collateralType) returns (bool)","function liquidate(uint128 accountId, uint128 poolId, address collateralType, uint128 liquidateAsAccountId) returns (tuple(uint256 debtLiquidated, uint256 collateralLiquidated, uint256 amountRewarded) liquidationData)","function liquidateVault(uint128 poolId, address collateralType, uint128 liquidateAsAccountId, uint256 maxUsd) returns (tuple(uint256 debtLiquidated, uint256 collateralLiquidated, uint256 amountRewarded) liquidationData)","error InsufficientMarketCollateralDepositable(uint128 marketId, address collateralType, uint256 tokenAmountToDeposit)","error InsufficientMarketCollateralWithdrawable(uint128 marketId, address collateralType, uint256 tokenAmountToWithdraw)","event MarketCollateralDeposited(uint128 indexed marketId, address indexed collateralType, uint256 tokenAmount, address indexed sender, int128 creditCapacity, int128 netIssuance, uint256 depositedCollateralValue, uint256 reportedDebt)","event MarketCollateralWithdrawn(uint128 indexed marketId, address indexed collateralType, uint256 tokenAmount, address indexed sender, int128 creditCapacity, int128 netIssuance, uint256 depositedCollateralValue, uint256 reportedDebt)","event MaximumMarketCollateralConfigured(uint128 indexed marketId, address indexed collateralType, uint256 systemAmount, address indexed owner)","function configureMaximumMarketCollateral(uint128 marketId, address collateralType, uint256 amount)","function depositMarketCollateral(uint128 marketId, address collateralType, uint256 tokenAmount)","function getMarketCollateralAmount(uint128 marketId, address collateralType) view returns (uint256 collateralAmountD18)","function getMarketCollateralValue(uint128 marketId) view returns (uint256)","function getMaximumMarketCollateral(uint128 marketId, address collateralType) view returns (uint256)","function withdrawMarketCollateral(uint128 marketId, address collateralType, uint256 tokenAmount)","error IncorrectMarketInterface(address market)","error NotEnoughLiquidity(uint128 marketId, uint256 amount)","event MarketRegistered(address indexed market, uint128 indexed marketId, address indexed sender)","event MarketSystemFeePaid(uint128 indexed marketId, uint256 feeAmount)","event MarketUsdDeposited(uint128 indexed marketId, address indexed target, uint256 amount, address indexed market, int128 creditCapacity, int128 netIssuance, uint256 depositedCollateralValue)","event MarketUsdWithdrawn(uint128 indexed marketId, address indexed target, uint256 amount, address indexed market, int128 creditCapacity, int128 netIssuance, uint256 depositedCollateralValue)","event SetMarketMinLiquidityRatio(uint128 indexed marketId, uint256 minLiquidityRatio)","event SetMinDelegateTime(uint128 indexed marketId, uint32 minDelegateTime)","function depositMarketUsd(uint128 marketId, address target, uint256 amount) returns (uint256 feeAmount)","function distributeDebtToPools(uint128 marketId, uint256 maxIter) returns (bool)","function getMarketAddress(uint128 marketId) view returns (address)","function getMarketCollateral(uint128 marketId) view returns (uint256)","function getMarketDebtPerShare(uint128 marketId) returns (int256)","function getMarketFees(uint128, uint256 amount) view returns (uint256 depositFeeAmount, uint256 withdrawFeeAmount)","function getMarketMinDelegateTime(uint128 marketId) view returns (uint32)","function getMarketNetIssuance(uint128 marketId) view returns (int128)","function getMarketPoolDebtDistribution(uint128 marketId, uint128 poolId) returns (uint256 sharesD18, uint128 totalSharesD18, int128 valuePerShareD27)","function getMarketPools(uint128 marketId) returns (uint128[] inRangePoolIds, uint128[] outRangePoolIds)","function getMarketReportedDebt(uint128 marketId) view returns (uint256)","function getMarketTotalDebt(uint128 marketId) view returns (int256)","function getMinLiquidityRatio(uint128 marketId) view returns (uint256)","function getOracleManager() view returns (address)","function getUsdToken() view returns (address)","function getWithdrawableMarketUsd(uint128 marketId) view returns (uint256)","function isMarketCapacityLocked(uint128 marketId) view returns (bool)","function registerMarket(address market) returns (uint128 marketId)","function setMarketMinDelegateTime(uint128 marketId, uint32 minDelegateTime)","function setMinLiquidityRatio(uint128 marketId, uint256 minLiquidityRatio)","function withdrawMarketUsd(uint128 marketId, address target, uint256 amount) returns (uint256 feeAmount)","event PoolApprovedAdded(uint256 poolId)","event PoolApprovedRemoved(uint256 poolId)","event PreferredPoolSet(uint256 poolId)","function addApprovedPool(uint128 poolId)","function getApprovedPools() view returns (uint256[])","function getPreferredPool() view returns (uint128)","function removeApprovedPool(uint128 poolId)","function setPreferredPool(uint128 poolId)","error CapacityLocked(uint256 marketId)","error MinDelegationTimeoutPending(uint128 poolId, uint32 timeRemaining)","error PoolAlreadyExists(uint128 poolId)","event PoolCollateralConfigurationUpdated(uint128 indexed poolId, address collateralType, tuple(uint256 collateralLimitD18, uint256 issuanceRatioD18) config)","event PoolCollateralDisabledByDefaultSet(uint128 poolId, bool disabled)","event PoolConfigurationSet(uint128 indexed poolId, tuple(uint128 marketId, uint128 weightD18, int128 maxDebtShareValueD18)[] markets, address indexed sender)","event PoolCreated(uint128 indexed poolId, address indexed owner, address indexed sender)","event PoolNameUpdated(uint128 indexed poolId, string name, address indexed sender)","event PoolNominationRenounced(uint128 indexed poolId, address indexed owner)","event PoolNominationRevoked(uint128 indexed poolId, address indexed owner)","event PoolOwnerNominated(uint128 indexed poolId, address indexed nominatedOwner, address indexed owner)","event PoolOwnershipAccepted(uint128 indexed poolId, address indexed owner)","event PoolOwnershipRenounced(uint128 indexed poolId, address indexed owner)","event SetMinLiquidityRatio(uint256 minLiquidityRatio)","function acceptPoolOwnership(uint128 poolId)","function createPool(uint128 requestedPoolId, address owner)","function getMinLiquidityRatio() view returns (uint256)","function getNominatedPoolOwner(uint128 poolId) view returns (address)","function getPoolCollateralConfiguration(uint128 poolId, address collateralType) view returns (tuple(uint256 collateralLimitD18, uint256 issuanceRatioD18) config)","function getPoolCollateralIssuanceRatio(uint128 poolId, address collateral) view returns (uint256)","function getPoolConfiguration(uint128 poolId) view returns (tuple(uint128 marketId, uint128 weightD18, int128 maxDebtShareValueD18)[])","function getPoolName(uint128 poolId) view returns (string poolName)","function getPoolOwner(uint128 poolId) view returns (address)","function nominatePoolOwner(address nominatedOwner, uint128 poolId)","function rebalancePool(uint128 poolId, address optionalCollateralType)","function renouncePoolNomination(uint128 poolId)","function renouncePoolOwnership(uint128 poolId)","function revokePoolNomination(uint128 poolId)","function setMinLiquidityRatio(uint256 minLiquidityRatio)","function setPoolCollateralConfiguration(uint128 poolId, address collateralType, tuple(uint256 collateralLimitD18, uint256 issuanceRatioD18) newConfig)","function setPoolCollateralDisabledByDefault(uint128 poolId, bool disabled)","function setPoolConfiguration(uint128 poolId, tuple(uint128 marketId, uint128 weightD18, int128 maxDebtShareValueD18)[] newMarketConfigurations)","function setPoolName(uint128 poolId, string name)","error OverflowUint256ToUint32()","error OverflowUint32ToInt32()","error OverflowUint64ToInt64()","error RewardDistributorNotFound()","error RewardUnavailable(address distributor)","event RewardsClaimed(uint128 indexed accountId, uint128 indexed poolId, address indexed collateralType, address distributor, uint256 amount)","event RewardsDistributed(uint128 indexed poolId, address indexed collateralType, address distributor, uint256 amount, uint256 start, uint256 duration)","event RewardsDistributorRegistered(uint128 indexed poolId, address indexed collateralType, address indexed distributor)","event RewardsDistributorRemoved(uint128 indexed poolId, address indexed collateralType, address indexed distributor)","function claimRewards(uint128 accountId, uint128 poolId, address collateralType, address distributor) returns (uint256)","function distributeRewards(uint128 poolId, address collateralType, uint256 amount, uint64 start, uint32 duration)","function getAvailableRewards(uint128 accountId, uint128 poolId, address collateralType, address distributor) view returns (uint256)","function getRewardRate(uint128 poolId, address collateralType, address distributor) view returns (uint256)","function registerRewardsDistributor(uint128 poolId, address collateralType, address distributor)","function removeRewardsDistributor(uint128 poolId, address collateralType, address distributor)","function updateRewards(uint128 poolId, address collateralType, uint128 accountId) returns (uint256[], address[])","event NewSupportedCrossChainNetwork(uint64 newChainId)","function configureChainlinkCrossChain(address ccipRouter, address ccipTokenPool)","function configureOracleManager(address oracleManagerAddress)","function getConfig(bytes32 k) view returns (bytes32 v)","function getConfigAddress(bytes32 k) view returns (address v)","function getConfigUint(bytes32 k) view returns (uint256 v)","function getTrustedForwarder() pure returns (address)","function isTrustedForwarder(address forwarder) pure returns (bool)","function setConfig(bytes32 k, bytes32 v)","function setSupportedCrossChainNetworks(uint64[] supportedNetworks, uint64[] ccipSelectors) returns (uint256 numRegistered)","function supportsInterface(bytes4 interfaceId) view returns (bool)","error InsufficientDelegation(uint256 minDelegation)","error InvalidCollateralAmount()","error InvalidLeverage(uint256 leverage)","error PoolCollateralLimitExceeded(uint128 poolId, address collateralType, uint256 currentCollateral, uint256 maxCollateral)","event DelegationUpdated(uint128 indexed accountId, uint128 indexed poolId, address collateralType, uint256 amount, uint256 leverage, address indexed sender)","function delegateCollateral(uint128 accountId, uint128 poolId, address collateralType, uint256 newCollateralAmountD18, uint256 leverage)","function getPosition(uint128 accountId, uint128 poolId, address collateralType) returns (uint256 collateralAmount, uint256 collateralValue, int256 debt, uint256 collateralizationRatio)","function getPositionCollateral(uint128 accountId, uint128 poolId, address collateralType) view returns (uint256 amount)","function getPositionCollateralRatio(uint128 accountId, uint128 poolId, address collateralType) returns (uint256)","function getPositionDebt(uint128 accountId, uint128 poolId, address collateralType) returns (int256 debt)","function getVaultCollateral(uint128 poolId, address collateralType) view returns (uint256 amount, uint256 value)","function getVaultCollateralRatio(uint128 poolId, address collateralType) returns (uint256)","function getVaultDebt(uint128 poolId, address collateralType) returns (int256)"]}}]);
//# sourceMappingURL=2268.adef0b43.js.map