#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPickerView_symbols(JSContext*);
@protocol UIPickerViewInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readonly,nonatomic) NSInteger numberOfComponents;
@property (nonatomic) BOOL showsSelectionIndicator;
@property (nonatomic,weak) id dataSource;
@property (nonatomic,weak) id delegate;
-(UIView *) viewForRow: (NSInteger) row forComponent: (NSInteger) component ;
-(void) reloadAllComponents;
-(NSInteger) selectedRowInComponent: (NSInteger) component ;
-(NSInteger) numberOfRowsInComponent: (NSInteger) component ;
-(CGSize) rowSizeForComponent: (NSInteger) component ;
-(void) reloadComponent: (NSInteger) component ;
-(void) selectRow: (NSInteger) row inComponent: (NSInteger) component animated: (BOOL) animated ;
@end
@protocol UIPickerViewClassExports<JSExport, NSCodingClassExports_>
@end
@protocol UIPickerViewDataSourceInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSInteger) numberOfComponentsInPickerView: (UIPickerView *) pickerView ;
-(NSInteger) pickerView: (UIPickerView *) pickerView numberOfRowsInComponent: (NSInteger) component ;
@end
@protocol UIPickerViewDataSourceClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIPickerViewDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) pickerView: (UIPickerView *) pickerView didSelectRow: (NSInteger) row inComponent: (NSInteger) component ;
-(UIView *) pickerView: (UIPickerView *) pickerView viewForRow: (NSInteger) row forComponent: (NSInteger) component reusingView: (UIView *) view ;
-(NSAttributedString *) pickerView: (UIPickerView *) pickerView attributedTitleForRow: (NSInteger) row forComponent: (NSInteger) component ;
-(NSString *) pickerView: (UIPickerView *) pickerView titleForRow: (NSInteger) row forComponent: (NSInteger) component ;
-(CGFloat) pickerView: (UIPickerView *) pickerView widthForComponent: (NSInteger) component ;
-(CGFloat) pickerView: (UIPickerView *) pickerView rowHeightForComponent: (NSInteger) component ;
@end
@protocol UIPickerViewDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop