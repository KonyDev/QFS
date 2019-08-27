#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIActivityItemProvider_symbols(JSContext*);
@protocol UIActivityItemProviderInstanceExports<JSExport, UIActivityItemSourceInstanceExports_>
@property (readonly,nonatomic) id item;
@property (readonly,copy,nonatomic) UIActivityType activityType;
@property (readonly,nonatomic,strong) id placeholderItem;
JSExportAs(initWithPlaceholderItem,
-(id) jsinitWithPlaceholderItem: (id) placeholderItem );
@end
@protocol UIActivityItemProviderClassExports<JSExport, UIActivityItemSourceClassExports_>
@end
@protocol UIActivityItemSourceInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSString *) activityViewController: (UIActivityViewController *) activityViewController subjectForActivityType: (UIActivityType) activityType ;
-(id) activityViewControllerPlaceholderItem: (UIActivityViewController *) activityViewController ;
-(id) activityViewController: (UIActivityViewController *) activityViewController itemForActivityType: (UIActivityType) activityType ;
-(UIImage *) activityViewController: (UIActivityViewController *) activityViewController thumbnailImageForActivityType: (UIActivityType) activityType suggestedSize: (CGSize) size ;
-(NSString *) activityViewController: (UIActivityViewController *) activityViewController dataTypeIdentifierForActivityType: (UIActivityType) activityType ;
@end
@protocol UIActivityItemSourceClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop