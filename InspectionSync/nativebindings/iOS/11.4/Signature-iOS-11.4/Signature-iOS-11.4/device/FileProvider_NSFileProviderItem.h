#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_FileProvider_NSFileProviderItem_symbols(JSContext*);
@protocol NSFileProviderItemInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,copy,nonatomic) NSNumber * childItemCount;
@property (readonly,copy,nonatomic) NSError * downloadingError;
@property (getter=isSharedByCurrentUser,readonly,nonatomic) BOOL sharedByCurrentUser;
@property (readonly,copy,nonatomic) NSFileProviderItemIdentifier parentItemIdentifier;
@property (readonly,copy,nonatomic) NSData * tagData;
@property (readonly,copy,nonatomic) NSFileProviderItemIdentifier itemIdentifier;
@property (readonly,nonatomic) NSFileProviderItemCapabilities capabilities;
@property (readonly,copy,nonatomic) NSString * filename;
@property (readonly,copy,nonatomic) NSNumber * documentSize;
@property (getter=isShared,readonly,nonatomic) BOOL shared;
@property (getter=isTrashed,readonly,nonatomic) BOOL trashed;
@property (getter=isUploaded,readonly,nonatomic) BOOL uploaded;
@property (getter=isDownloading,readonly,nonatomic) BOOL downloading;
@property (getter=isDownloaded,readonly,nonatomic) BOOL downloaded;
@property (readonly,nonatomic,strong) NSPersonNameComponents * ownerNameComponents;
@property (readonly,nonatomic,strong) NSData * versionIdentifier;
@property (readonly,nonatomic,strong) NSDictionary * userInfo;
@property (readonly,copy,nonatomic) NSNumber * favoriteRank;
@property (readonly,copy,nonatomic) NSDate * creationDate;
@property (readonly,copy,nonatomic) NSDate * contentModificationDate;
@property (readonly,nonatomic,strong) NSPersonNameComponents * mostRecentEditorNameComponents;
@property (readonly,copy,nonatomic) NSString * typeIdentifier;
@property (getter=isUploading,readonly,nonatomic) BOOL uploading;
@property (readonly,copy,nonatomic) NSDate * lastUsedDate;
@property (getter=isMostRecentVersionDownloaded,readonly,nonatomic) BOOL mostRecentVersionDownloaded;
@property (readonly,copy,nonatomic) NSError * uploadingError;
@end
@protocol NSFileProviderItemClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop