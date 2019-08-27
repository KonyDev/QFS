#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDocumentPickerExtensionViewController_symbols(JSContext*);
@protocol UIDocumentPickerExtensionViewControllerInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSString * providerIdentifier;
@property (readonly,copy,nonatomic) NSURL * originalURL;
@property (readonly,copy,nonatomic) NSURL * documentStorageURL;
@property (readonly,assign,nonatomic) UIDocumentPickerMode documentPickerMode;
@property (readonly,copy,nonatomic) NSArray * validTypes;
-(void) dismissGrantingAccessToURL: (NSURL *) url ;
-(void) prepareForPresentationInMode: (UIDocumentPickerMode) mode ;
@end
@protocol UIDocumentPickerExtensionViewControllerClassExports<JSExport>
@end
#pragma clang diagnostic pop