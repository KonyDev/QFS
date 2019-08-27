#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDocumentMenuViewController_symbols(JSContext*);
@protocol UIDocumentMenuViewControllerInstanceExports<JSExport>
@property (nonatomic,weak) id delegate;
JSExportAs(addOptionWithTitleImageOrderHandler,
-(void) jsaddOptionWithTitle: (NSString *) title image: (UIImage *) image order: (UIDocumentMenuOrder) order handler: (JSValue *) handler );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithDocumentTypesInMode,
-(id) jsinitWithDocumentTypes: (NSArray *) allowedUTIs inMode: (UIDocumentPickerMode) mode );
JSExportAs(initWithURLInMode,
-(id) jsinitWithURL: (NSURL *) url inMode: (UIDocumentPickerMode) mode );
@end
@protocol UIDocumentMenuViewControllerClassExports<JSExport>
@end
@protocol UIDocumentMenuDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) documentMenu: (UIDocumentMenuViewController *) documentMenu didPickDocumentPicker: (UIDocumentPickerViewController *) documentPicker ;
-(void) documentMenuWasCancelled: (UIDocumentMenuViewController *) documentMenu ;
@end
@protocol UIDocumentMenuDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop