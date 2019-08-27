#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_DocumentManager_UIDocumentBrowserAction_symbols(JSContext*);
@protocol UIDocumentBrowserActionInstanceExports<JSExport>
@property (assign,nonatomic) BOOL supportsMultipleItems;
@property (nonatomic,strong) UIImage * image;
@property (readonly,nonatomic) NSString * localizedTitle;
@property (copy,nonatomic) NSArray * supportedContentTypes;
@property (readonly,nonatomic) NSString * identifier;
@property (readonly,nonatomic) UIDocumentBrowserActionAvailability availability;
JSExportAs(initWithIdentifierLocalizedTitleAvailabilityHandler,
-(id) jsinitWithIdentifier: (NSString *) identifier localizedTitle: (NSString *) localizedTitle availability: (UIDocumentBrowserActionAvailability) availability handler: (JSValue *) handler );
@end
@protocol UIDocumentBrowserActionClassExports<JSExport>
@end
#pragma clang diagnostic pop