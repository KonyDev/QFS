#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrinter_symbols(JSContext*);
@protocol UIPrinterInstanceExports<JSExport>
@property (readonly) UIPrinterJobTypes supportedJobTypes;
@property (readonly,copy) NSString * makeAndModel;
@property (readonly,copy) NSURL * URL;
@property (readonly) BOOL supportsDuplex;
@property (readonly,copy) NSString * displayLocation;
@property (readonly,copy) NSString * displayName;
@property (readonly) BOOL supportsColor;
JSExportAs(contactPrinter,
-(void) jscontactPrinter: (JSValue *) completionHandler );
@end
@protocol UIPrinterClassExports<JSExport>
+(UIPrinter *) printerWithURL: (NSURL *) url ;
@end
#pragma clang diagnostic pop